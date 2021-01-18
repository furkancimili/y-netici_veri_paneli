import { Bildirim } from './../model/bildirim';
import { Kullanici } from './../model/kullanici';
import { Uye } from './../models/uye';
import { Kayit } from './../model/kayit';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireAuth } from '@angular/fire/auth'
@Injectable({
  providedIn: 'root'
})
export class FbservisService {
  private dbKayit = '/Kayitlar';
  private dbUye = '/Uyeler';
  private dbBildirim = '/Bildirimler';
  private dbKullanici = '/Kullanicilar'
  kayitRef: AngularFireList<Kayit> = null;
  uyeRef: AngularFireList<Uye> = null;
  kullaniciRef: AngularFireList<Kullanici>=null;
  bildirimRef: AngularFireList<Bildirim>=null;
  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {
    this.kayitRef = db.list(this.dbKayit);
    this.uyeRef = db.list(this.dbUye);
    this.kullaniciRef = db.list(this.dbKullanici);
    this.bildirimRef = db.list(this.dbBildirim);
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
  KayitListele() {
    return this.kayitRef;
  }
  KayitListeleByUID(uid: string) {
    return this.db.list("/Kayitlar/", q => q.orderByChild("uid").equalTo(uid));
  }
  KullaniciListeleByUID(uid: string) {
    return this.db.list("/Kullanicilar/", q => q.orderByChild("uid").equalTo(uid));
  }
  BildirimListeleByUID(uid: string) {
    return this.db.list("/Bildirimler/", q => q.orderByChild("uid").equalTo(uid));
  }
  KullaniciByKey(key: string) {
    return this.db.object("/Kullanicilar/" + key);
  }
  BildirimByKey(key: string) {
    return this.db.object("/Bildirimler/" + key);
  }
  KayitByKey(key: string) {
    return this.db.object("/Kayitlar/" + key);
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
  KullaniciListele(){
    return this.kullaniciRef;
  }
  KullaniciEkle(kullanici:Kullanici){
      return this.kullaniciRef.push(kullanici);
  }
  KullaniciDuzenle(kullanici:Kullanici){
    return this.kullaniciRef.update(kullanici.key,kullanici);
  }
  KullaniciSil(key:string){
    return this.kullaniciRef.remove(key);
  }   
  KullaniciOl(kullanici:Kullanici) {
    return this.afAuth.createUserWithEmailAndPassword(kullanici.mail, kullanici.parola);
  }
  

  BildirimListele(){
    return this.bildirimRef;
  }
  BildirimEkle(bildirim:Bildirim){
      return this.bildirimRef.push(bildirim);
  }
  BildirimDuzenle(bildirim:Bildirim){
    return this.bildirimRef.update(bildirim.key,bildirim);
  }
  BildirimSil(key:string){
    return this.bildirimRef.remove(key);
  }   
  
  

 
  

}
