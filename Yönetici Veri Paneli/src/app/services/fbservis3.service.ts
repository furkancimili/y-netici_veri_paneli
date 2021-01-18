import { Kullanici } from './../model/kullanici';
import { Uye } from './../models/uye';
import { İcerik } from '../models/icerik';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class Fbservis3Service {
  private dbİcerik = '/İcerikler';
  private dbUye = '/Uyeler';
  private dbKullanici = '/Kullanicilar'
  icerikRef: AngularFireList<İcerik> = null;
  uyeRef: AngularFireList<Uye> = null;
  kullaniciRef: AngularFireList<Kullanici>=null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.icerikRef = db.list(this.dbİcerik);
    this.uyeRef = db.list(this.dbUye);
    this.kullaniciRef = db.list(this.dbKullanici);
  }

  OturumAc(mail: string, parola: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, parola);
  }
  OturumKapat() {
    return this.afAuth.signOut();
  }
  OturumKontrol() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }
  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.parola);
  }

  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }
  İcerikListele() {
    return this.icerikRef;
  }
  KayitListeleByUID(uid: string) {
    return this.db.list("/İcerikler/", q => q.orderByChild("uid").equalTo(uid));
  }
  KayitByKey(key: string) {
    return this.db.object("/İcerikler/" + key);
  }
  KayitEkle(icerik: İcerik) {
    return this.icerikRef.push(icerik);
  }
  KayitDuzenle(icerik: İcerik) {
    return this.icerikRef.update(icerik.key, icerik);
  }
  KayitSil(key: string) {
    return this.icerikRef.remove(key);
  }
  KullaniciEkle(kullanici:Kullanici){
    return this.kullaniciRef.push(kullanici);
}
}
