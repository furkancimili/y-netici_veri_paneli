import { Bildirim } from './../../model/bildirim';
import { FbservisService } from 'src/app/services/fbservis4.service';
import { Sonuc2 } from './../../models/sonuc2';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-adminbildirim',
  templateUrl: './adminbildirim.component.html',
  styleUrls: ['./adminbildirim.component.scss']
})
export class AdminbildirimComponent implements OnInit {
  bildirimler;
  key: string;
  secBildirimler: Bildirim= new Bildirim();
  sonuc2: Sonuc2 = new Sonuc2();
  bildirimekleduzenle: boolean = false;
  bildirimdetay: boolean = false;
  bildirimsilme: boolean = false;
  constructor(
    public fbServis: FbservisService,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() 
  {
    this.BildirimLislele();
    this.secBildirimler.key = null;
  }
  
  BildirimTemizle() {
    this.secBildirimler = new Bildirim();
    this.secBildirimler.key = null;
  }
  BildirimLislele() {
    this.fbServis.BildirimListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.bildirimler = data;
    });
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

  BildirimSec(b: Bildirim) {
    Object.assign(this.secBildirimler, b);

  }
  

  BildirimSil() {

    this.fbServis.BildirimSil(this.secBildirimler.key).then(d => {
      this.sonuc2.islem = true;
      this.sonuc2.mesaj = "Bildirim Silindi";
      this.bildirimsilme = false;
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
