import { Sonuc } from '../models/sonuc';
import { FbServis2Service } from '../services/fbServis2.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { partitionArray } from '@angular/compiler/src/util';
import { ViewChild,ElementRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule,SocialAuthServiceConfig, GoogleLoginProvider,FacebookLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;
  GoogleLoginProvider = GoogleLoginProvider;

  
  sonuc: Sonuc = new Sonuc();
  constructor(private authService: SocialAuthService,
    public fbservis2: FbServis2Service,
    public router: Router
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      this.router.navigate(['/login']);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigate(['/login']);
  }


  signOut(): void {
    this.authService.signOut();
  }

  refreshGoogleToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  
  GirisYap(mail: string, parola: string) {
    this.fbservis2.OturumAc(mail, parola).then(d => {
      if (d.user) {
        localStorage.setItem("user", JSON.stringify(d.user));
        this.router.navigate(['/sidebaruye']);
      }
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "E-Posta Adresi veya Parola Geçersizdir!";
    });
  }
  


}
