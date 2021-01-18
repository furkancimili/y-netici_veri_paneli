import { Bildirim } from './../model/bildirim';
import { SidebarService } from './../shared/sidebarUye/sidebar.service';
import { FbservisService } from '../services/fbservis4.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Sonuc2 } from './../models/sonuc2';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-uyeduyurular',
  templateUrl: './uyeduyurular.component.html',
  styleUrls: ['./uyeduyurular.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class UyeduyurularComponent implements OnInit {
  bildirimler:Bildirim[];
  adsoyad: string;
  uid: string;
  public samplePagesCollapsed = false;
  menus = [];
  key: string;
  secBildirimler: Bildirim= new Bildirim();
  sonuc2: Sonuc2 = new Sonuc2();
  ekleduzenle: boolean = false;
  detay: boolean = false;
  silme: boolean = false;

  constructor(  public fbServis: FbservisService,
    public sidebarservice: SidebarService,
    public router: Router,
    public route: ActivatedRoute,) {
      this.menus = sidebarservice.getMenuList();
     }


     ngOnInit() {
      const body = document.querySelector('body');     
        var user = JSON.parse(localStorage.getItem("user"));
        this.uid = user.uid;
        this.adsoyad = user.displayName;
        this.BildirimListele();
    }
  
    OturumKapat() {
      this.fbServis.OturumKapat().then(d => {
        localStorage.removeItem("user");
        this.router.navigate(['/login']);
      });
  
    }
    BildirimListele() {
      this.fbServis.BildirimListele().snapshotChanges().subscribe(data => {
        this.bildirimler = [];
        data.forEach(satir => {
          const y = { ...satir.payload.toJSON(), key: satir.key };
          this.bildirimler.push(y as Bildirim);
        });
      });
    }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {

    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }
  BildirimKaydet() {
    var tarih = new Date();
    if (this.secBildirimler.key == null) {
      this.secBildirimler.kayTarih = tarih.getTime().toString();
      this.secBildirimler.duzTarih = tarih.getTime().toString();
      this.secBildirimler.islem = false;
      this.fbServis.BildirimEkle(this.secBildirimler).then(d => {
        this.sonuc2.islem = true;
        this.sonuc2.mesaj = "Bildirim Eklendi";
      });
    } else {
      this.secBildirimler.duzTarih = tarih.getTime().toString();
      this.secBildirimler.islem = false;
      this.fbServis.BildirimDuzenle(this.secBildirimler).then(d => {
        this.sonuc2.islem = true;
        this.sonuc2.mesaj = "Bildirim Güncellendi";
      });
    }
  }

  BildirimSec(b:Bildirim) {
    Object.assign(this.secBildirimler, b);

  }
  BildirimSilme() {
    this.fbServis.BildirimSil(this.key).then(d => {
      this.router.navigate(['/uyegiris']);
    });
  }

  Sil() {

    this.fbServis.BildirimSil(this.secBildirimler.key).then(d => {
      this.sonuc2.islem = true;
      this.sonuc2.mesaj = "Bildirim Silindi";
      this.silme = false;
    });
  }

  BildirimTamamlaIptal(b: Bildirim , islem: boolean) {
    var tarih = new Date();
    b.duzTarih = tarih.getTime().toString();
    b.islem = islem;
    this.fbServis.BildirimDuzenle(b).then(d => {
      this.sonuc2.islem = true;
      this.sonuc2.mesaj = "Bildirim Güncellendi";
    });

  }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }
  
  BildirimGetir() {
    this.fbServis.BildirimByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secBildirimler = (y as Bildirim);
    });
  }

}
