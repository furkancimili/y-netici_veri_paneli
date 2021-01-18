import { Uye } from './../models/uye';
import { FbservisService } from 'src/app/services/fbservis4.service';
import { Fbservis3Service } from './../services/fbservis3.service';
import { Sonuc } from './../models/sonuc';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kullanici } from './../model/kullanici';
import { map } from 'rxjs/operators';
import { FbServis2Service } from '../services/fbServis2.service';
import { partitionArray } from '@angular/compiler/src/util';
import { ViewChild,ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule,SocialAuthServiceConfig, GoogleLoginProvider,FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  auth2:any;
  user: any;
  GoogleLoginProvider = GoogleLoginProvider;

  sonuc: Sonuc = new Sonuc();
  secUye: Uye = new Uye();
  kullanici: any;
  secKullanici: Kullanici = new Kullanici();
  constructor(
    public fbServis: Fbservis3Service,
    public FbservisService:FbservisService,
    public router: Router,
    private authService: SocialAuthService,
    public fbservis2: FbServis2Service,

  ) { }
  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
    this.googleInitialize();
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.router.navigate(['/login']);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigate(['/login']);
  }
  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  KullaniciKayitYap() {
    var tarih = new Date();
    this.secKullanici.duzTarih = tarih.getTime().toString();
    this.secKullanici.kayTarih = tarih.getTime().toString();

    this.FbservisService.KullaniciOl(this.secKullanici).then(d => {
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
    this.FbservisService.KullaniciEkle(this.secKullanici).then(d => {
      this.router.navigate(['/login']);
    });
  }
  googleInitialize() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '631867203803-gfnbuj33563dmuorhmfm6cv2prqasulq.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }
  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

}
