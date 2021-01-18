import { Kayit } from './../../model/kayit';
import { FbservisService } from './../../services/fbservis4.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-makaleDetay',
  templateUrl: './makaleDetay.component.html',
  styleUrls: ['./makaleDetay.component.scss']
})
export class MakaleDetayComponent implements OnInit {
  key: string;
  secKayit: Kayit = new Kayit();
  constructor(
    public route: ActivatedRoute,
    public fbServis: FbservisService,
    public router: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe(p => {
      this.key = p.key;
      this.KayitGetir();
    });
  }
  KayitGetir() {
    this.fbServis.KayitByKey(this.key).snapshotChanges().subscribe(data => {
      const y = { ...data.payload.toJSON(), key: this.key };
      this.secKayit = (y as Kayit);
    });
  }
}
