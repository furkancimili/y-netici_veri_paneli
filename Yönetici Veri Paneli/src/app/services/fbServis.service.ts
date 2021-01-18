import { Kayit } from './../models/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FbServisService {

  private dbKayit = '/Kayitlar';
  kayitRef: AngularFireList<Kayit> = null;

  constructor(
    public db: AngularFireDatabase
  ) {
    this.kayitRef = db.list(this.dbKayit);
  }

  /* kayıtlar firebase servis başlangıç  */

  KayitListele() {
    return this.kayitRef;
  }
  KayitEkle(kayit: Kayit) {
    return this.kayitRef.push(kayit);
  }
  KayitDuzenle(kayit: Kayit) {
    return this.kayitRef.update(kayit.key, kayit);
  }
  KayitSil(key: string) {
    return this.kayitRef.remove(key);
  }

  /* kayıtlar firebase servis bitiş  */

}
