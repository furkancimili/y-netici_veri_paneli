import { FbservisService } from 'src/app/services/fbservis4.service';
import { Kullanici } from './../../model/kullanici';
import { Sonuc } from './../../models/sonuc';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators'
@Component({
  selector: 'app-kayitlar',
  templateUrl: './kayitlar.component.html',
  styleUrls: ['./kayitlar.component.scss']
})
export class KayitlarComponent implements OnInit {
  kullanicilar: any;
  secKullanici: Kullanici = new Kullanici();
  sonuc: Sonuc = new Sonuc();
  constructor(
    public fbservis:FbservisService
  ) { }

  ngOnInit() {
    this.KullaniciListele();
    this.secKullanici.key = null;
  }
  KullaniciListele() {
    this.fbservis.KullaniciListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.kullanicilar = data;
    });

  }
  KullaniciDuzenle(kullanici: Kullanici) {
    Object.assign(this.secKullanici, kullanici);
  }
  KullaniciSil(kullanici: Kullanici) {
    this.fbservis.KullaniciSil(kullanici.key).then(() => {
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Kullanici Silindi";
    });
  }
  KullaniciKaydet() {
    var tarih = new Date();
    this.secKullanici.duzTarih = tarih.getTime().toString();

    if (this.secKullanici.key == null) {
      this.secKullanici.kayTarih = tarih.getTime().toString();
      this.fbservis.KullaniciEkle(this.secKullanici).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Kayıt Eklendi"; })
    }
         }
    
  
  Vazgec() {
    this.secKullanici = new Kullanici();
    this.secKullanici.key = null;
  }
  KullaniciKayitYap() {
    var tarih = new Date();
    this.secKullanici.duzTarih = tarih.getTime().toString();
    this.secKullanici.kayTarih = tarih.getTime().toString();

    this.fbservis.KullaniciOl(this.secKullanici).then(d => {
      d.user.updateProfile({
        displayName: this.secKullanici.adsoyad
      }).then();
      this.secKullanici.uid = d.user.uid;
      localStorage.setItem("user", JSON.stringify(d.user));
      this.KullaniciEkle();
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu Tekrar Deneyiniz!";
      
    });
  }
  KullaniciEkle() {
    this.fbservis.KullaniciEkle(this.secKullanici).then(d => {
    });
  }
}
