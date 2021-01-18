import { Makale } from './../models/makale';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class FbServis2Service {
  private dbMakale = '/Makale';
  makaleRef: AngularFireList<Makale> = null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.makaleRef = db.list(this.dbMakale);
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  AdminOturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }

  KayitListele() {
    return this.makaleRef;
  }
  KayitEkle(k: Makale) {
    return this.makaleRef.push(k);
  }
  KayitDuzenle(k: Makale) {
    return this.makaleRef.update(k.key, k);
  }
  KayitSil(key: string) {
    return this.makaleRef.remove(key);
  }

}