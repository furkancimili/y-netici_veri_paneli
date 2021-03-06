import { SidebarService } from './../shared/sidebarUye/sidebar.service';
import { Kayit } from '../model/kayit';
import { FbservisService } from '../services/fbservis4.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Sonuc2 } from './../models/sonuc2';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';





@Component({
  selector: 'app-uyeMakaleler',
  templateUrl: './uyeMakaleler.component.html',
  styleUrls: ['./uyeMakaleler.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class UyeMakalelerComponent implements OnInit {
  adsoyad: string;
  uid: string;
  kayitlar: Kayit[];
  public samplePagesCollapsed = false;
  menus = [];
  key: string;
  secKayitlar: Kayit= new Kayit();
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
        this.KayitListele();
    }
  
    OturumKapat() {
      this.fbServis.OturumKapat().then(d => {
        localStorage.removeItem("user");
        this.router.navigate(['/login']);
      });
  
    }
    KayitListele() {
      this.fbServis.KayitListele().snapshotChanges().subscribe(data => {
        this.kayitlar = [];
        data.forEach(satir => {
          const y = { ...satir.payload.toJSON(), key: satir.key };
          this.kayitlar.push(y as Kayit);
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
  Kaydet() {
    var tarih = new Date();
    if (this.secKayitlar.key == null) {
      this.secKayitlar.kayTarih = tarih.getTime().toString();
      this.secKayitlar.duzTarih = tarih.getTime().toString();
      this.secKayitlar.islem = false;
      this.fbServis.KayitEkle(this.secKayitlar).then(d => {
        this.sonuc2.islem = true;
        this.sonuc2.mesaj = "Kayıt Eklendi";
      });
    } else {
      this.secKayitlar.duzTarih = tarih.getTime().toString();
      this.secKayitlar.islem = false;
      this.fbServis.KayitDuzenle(this.secKayitlar).then(d => {
        this.sonuc2.islem = true;
        this.sonuc2.mesaj = "Kayıt Güncellendi";
      });
    }
  }

  KayitSec(k: Kayit) {
    Object.assign(this.secKayitlar, k);

  }
  Silme() {
    this.fbServis.KayitSil(this.key).then(d => {
      this.router.navigate(['/uyegiris']);
    });
  }

  Sil() {

    this.fbServis.KayitSil(this.secKayitlar.key).then(d => {
      this.sonuc2.islem = true;
      this.sonuc2.mesaj = "Kayıt Silindi";
      this.silme = false;
    });
  }

  TamamlaIptal(k: Kayit , islem: boolean) {
    var tarih = new Date();
    k.duzTarih = tarih.getTime().toString();
    k.islem = islem;
    this.fbServis.KayitDuzenle(k).then(d => {
      this.sonuc2.islem = true;
      this.sonuc2.mesaj = "Kayıt Güncellendi";
    });

  }
  OturumuKapat() {
    this.fbServis.OturumKapat().then(() => {
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }
  
  KayitGetir() {
    this.fbServis.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secKayitlar = (y as Kayit);
    });
  }

}
