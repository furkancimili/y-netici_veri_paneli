import { FbservisService } from './../../services/fbservis4.service';
import { Kayit } from './../../model/kayit';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-makaleEkle',
  templateUrl: './makaleEkle.component.html',
  styleUrls: ['./makaleEkle.component.scss']
})
export class MakaleEkleComponent implements OnInit {

  secKayit: Kayit = new Kayit();
  constructor(
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit() {

  }
  Kaydet() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.secKayit.uid = user.uid;
    var tarih = new Date();
    this.secKayit.kayTarih = tarih.getTime().toString();
    this.secKayit.duzTarih = tarih.getTime().toString();
    this.fbServis.KayitEkle(this.secKayit).then(d => {
      this.router.navigate(['/sidebaruye']);
    });
  }
}
