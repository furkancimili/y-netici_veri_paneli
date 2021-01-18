import { UyeduyurularComponent } from './uyeduyurular/uyeduyurular.component';
import { AdminbildirimComponent } from './components/adminbildirim/adminbildirim.component';
import { FooterUyeComponent } from './shared/uyeİletisim/footerUye.component';
import { UyeMakalelerComponent } from './uyeMakaleler/uyeMakaleler.component';
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
import { LoginComponent } from './login/login.component';
import { MakalelerComponent } from './components/makaleler/makaleler.component';
import { UyeComponent } from './components/uye/uye.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { UyePaneliComponent } from './uyePaneli/uyePaneli.component';



const redirectLogin = () => redirectUnauthorizedTo(['/giris']);
const routes: Routes = [
  { path: '', redirectTo: '/giris', pathMatch: 'full' },
  {path: 'dashboard',component:DashboardComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLogin}},
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule),canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLogin} },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule),canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLogin}  },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLogin}  },
  { path: 'general-pages', loadChildren: () => import('./general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLogin} },
  { path: 'user-pages', loadChildren: () => import('./user-pages.module').then(m => m.UserPagesModule) },
  { path: 'kayitlar',component:KayitlarComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLogin} },
  { path: 'uye',component:UyeComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLogin} },
  { path: 'login',component:LoginComponent},
  { path: 'makaleler',component:MakalelerComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLogin} },
  {path: 'register',component:RegisterComponent},
  {path: 'uyegiris',component:UyeGirisComponent},
  {path: 'giris',component:GirisComponent},
  {path: 'admingiris',component:AdminGirisComponent},
  {path: 'uyepaneli',component:UyePaneliComponent},
  {path: 'uyeformlar',component:UyeFormlarComponent },
  {path: 'uyegrafikler',component:UyeGrafiklerComponent },
  {path: 'uyetablolar',component:UyeTabloComponent },
  {path: 'sidebaruye',component:SidebarUyeComponent },
  {path: 'uyemakaleler',component:UyeMakalelerComponent},
  {path: 'uyeiletisim',component:FooterUyeComponent},
  {path: 'adminbildirim',component:AdminbildirimComponent,canActivate: [AngularFireAuthGuard],data: {authGuardPipe: redirectLogin}},

  {path: 'makaleekle',component:MakaleEkleComponent, canActivate: [AngularFireAuthGuard],  data: {    authGuardPipe: redirectLogin  }},
  {path: 'makaledetay/:key',component:MakaleDetayComponent, canActivate: [AngularFireAuthGuard],  data: {    authGuardPipe: redirectLogin  }},
{path: 'makalekoruma',component:MakaleKorumaComponent},
{path: 'uyeduyurular',component:UyeduyurularComponent},

  

 
  

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
