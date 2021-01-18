import { FbservisService } from 'src/app/services/fbservis4.service';
import { Sonuc2 } from './../../models/sonuc2';
import { Kayit} from './../../model/kayit';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './makaleler.component.html',
  styleUrls: ['./makaleler.component.scss']
})
export class MakalelerComponent implements OnInit {
  kayitlar;
  key: string;
  secKayitlar: Kayit= new Kayit();
  sonuc2: Sonuc2 = new Sonuc2();
  ekleduzenle: boolean = false;
  detay: boolean = false;
  silme: boolean = false;
  constructor(
    public fbServis: FbservisService,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() 
  {
    this.KayitLislele();
  }
  

  KayitLislele() {
    this.fbServis.KayitListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.kayitlar = data;
    });
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
