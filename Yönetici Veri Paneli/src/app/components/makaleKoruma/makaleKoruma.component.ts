import { Kayit } from './../../model/kayit';
import { FbservisService } from './../../services/fbservis4.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-makaleKoruma',
  templateUrl: './makaleKoruma.component.html',
  styleUrls: ['./makaleKoruma.component.scss']
})
export class MakaleKorumaComponent implements OnInit {
  adsoyad: string;
  uid: string;
  kayitlar: Kayit[];
  constructor(
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit() {
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
}
