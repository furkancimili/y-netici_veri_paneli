import { Fbservis3Service } from './services/fbservis3.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Yönetici Veri Paneli';

  showSidebar: boolean = false;
  showNavbar: boolean = false;
  showFooter: boolean = false;
  isLoading: boolean;



  constructor(private router: Router,
              public fbservis:Fbservis3Service) {
    
    // Removing Sidebar, Navbar, Footer for Documentation, Error and Auth pages
    router.events.forEach((event) => { 
      if(event instanceof NavigationStart) {
        if((event['url'] == '/giris') || (event['url'] == '/admingiris') || (event['url'] == '/login') || (event['url'] == '/uyegiris')|| (event['url'] == '/')|| (event['url'] == '/register')|| (event['url'] == '/makaleekle') || (event['url'] == '/makaleduzenle')
        || (event['url'] == '/makalesil')|| (event['url'] == '/makaledetay')|| (event['url'] == '/uyepaneli')|| (event['url'] == '/uyeapp')|| (event['url'] == '/uyeformlar')|| (event['url'] == '/uyegrafikler')
        || (event['url'] == '/uyetablolar')|| (event['url'] == '/sidebaruye')|| (event['url'] == '/footeruye')|| (event['url'] == '/uyemakaleler')|| (event['url'] == '/uyeiletisim')|| (event['url'] == '/makalekoruma')|| (event['url'] == '/makaleduzenle')|| (event['url'] == '/uyeduyurular'))  {
          this.showSidebar = false;
          this.showNavbar = false;
          this.showFooter = false;
          document.querySelector('.main-panel').classList.add('w-100');
          document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
          document.querySelector('.content-wrapper').classList.remove('auth', 'auth-img-bg', );
          document.querySelector('.content-wrapper').classList.remove('auth', 'lock-full-bg');
          {
            document.querySelector('.content-wrapper').classList.add('p-0');
          }


        } else {
          this.showSidebar = true;
          this.showNavbar = true;
          this.showFooter = true;
          document.querySelector('.main-panel').classList.remove('w-100');
          document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
          document.querySelector('.content-wrapper').classList.remove('auth', 'auth-img-bg');
          document.querySelector('.content-wrapper').classList.remove('p-0');
        }
      }
    });   

    // Spinner for lazyload modules
    router.events.forEach((event) => { 
      if (event instanceof RouteConfigLoadStart) {
          this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
          this.isLoading = false;
      }
    });
  }



  ngOnInit() {
    // Scroll to top after route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }
}
