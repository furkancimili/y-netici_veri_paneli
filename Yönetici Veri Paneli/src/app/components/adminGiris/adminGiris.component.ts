import { FbServis2Service } from './../../services/fbServis2.service';
import { Sonuc } from './../../models/sonuc';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { partitionArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-adminGiris',
  templateUrl: './adminGiris.component.html',
  styleUrls: ['./adminGiris.component.scss']
})
export class AdminGirisComponent implements OnInit {
  sonuc: Sonuc = new Sonuc();
  constructor(
    public fbservis2: FbServis2Service,
    public router: Router
  ) { }

  ngOnInit() {
  }
  GirisYapAdmin(mail: string, parola: string) {
    if (mail == "admin@gmail.com" && parola == "123456") {
      this.fbservis2.AdminOturumAc(mail, parola).then((d: { user: any; }) => {
        if (d.user) {
          localStorage.setItem("user", JSON.stringify(d.user));
          this.router.navigate(['/dashboard']);
        } else { alert("hatalı giriş") }
      });
 
    } else {
      alert("Admin Olarak Yetkiniz Bulunmamaktadır.Giriş Sayfasına Yönlendiriliyorsunuz ")
      this.router.navigate(['/giris']);
    }
 
  }
 
  }
