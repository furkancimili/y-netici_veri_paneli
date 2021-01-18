import { UyeduyurularComponent } from '././uyeduyurular/uyeduyurular.component';
import { AdminbildirimComponent } from './components/adminbildirim/adminbildirim.component';
import { FooterUyeComponent } from './shared/uyeİletisim/footerUye.component';
import { SidebarUyeComponent } from './shared/sidebarUye/sidebarUye.component';
import { UyeTabloComponent } from './uyeTablo/uyeTablo.component';
import { UyeGrafiklerComponent } from './uyeGrafikler/uyeGrafikler.component';
import { UyeFormlarComponent } from './uyeFormlar/uyeFormlar.component';

import { AdminGirisComponent } from './components/adminGiris/adminGiris.component';
import { GirisComponent } from './components/giris/giris.component';

import { MakaleKorumaComponent } from './components/makaleKoruma/makaleKoruma.component';
import { MakaleDetayComponent } from './components/makaleDetay/makaleDetay.component';
import { MakaleEkleComponent } from './components/makaleEkle/makaleEkle.component';

import { UyeGirisComponent } from './components/uyeGiris/uyeGiris.component';
import { RegisterComponent } from './register/register.component';
import { MakalelerComponent } from './components/makaleler/makaleler.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { UyeComponent } from './components/uye/uye.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { LoginComponent } from './login/login.component';
import { CKEditorModule } from 'ng2-ckeditor';

import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule,SocialAuthServiceConfig, GoogleLoginProvider,FacebookLoginProvider } from 'angularx-social-login';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { UyePaneliComponent } from './uyePaneli/uyePaneli.component';
import { UyeMakalelerComponent } from './uyeMakaleler/uyeMakaleler.component';


@NgModule({
  declarations: [								
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    UyeComponent,
    KayitlarComponent,
    LoginComponent,
    MakalelerComponent,
    UyeComponent,
    RegisterComponent,
    UyeGirisComponent,
    MakaleEkleComponent,
    MakaleDetayComponent,
    MakaleKorumaComponent,
    GirisComponent,
    AdminGirisComponent,
    UyePaneliComponent,
    UyeFormlarComponent,
    UyeGrafiklerComponent,
    UyeTabloComponent,
    SidebarUyeComponent,
    UyeMakalelerComponent,
    FooterUyeComponent,
    AdminbildirimComponent,
    UyeduyurularComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    CKEditorModule,
    HttpClientModule,
    SocialLoginModule,
    AngularFireStorageModule,

  ],
  providers: [ThemeService,AngularFireAuth, AngularFirestore,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '631867203803-gfnbuj33563dmuorhmfm6cv2prqasulq.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('164270641749484'),
          },
        ],
      } as SocialAuthServiceConfig,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
