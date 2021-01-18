import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../shared/sidebarUye/sidebar.service';
import { Kayit } from '../model/kayit';
import { FbservisService } from '../services/fbservis4.service';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-uyeTablo',
  templateUrl: './uyeTablo.component.html',
  styleUrls: ['./uyeTablo.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class UyeTabloComponent implements OnInit {
  public samplePagesCollapsed = false;
  adsoyad: string;
  uid: string;
  kayitlar: Kayit[];
  menus = [];

  constructor( public fbServis: FbservisService,
    public sidebarservice: SidebarService,
    public router: Router) {
      this.menus = sidebarservice.getMenuList();
     }

     ngOnInit() {var user = JSON.parse(localStorage.getItem("user"));
     this.uid = user.uid;
     this.adsoyad = user.displayName;
     this.KayitListele();
     const body = document.querySelector('body');
     // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
     document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
       el.addEventListener('mouseover', function() {
         if(body.classList.contains('sidebar-icon-only')) {
           el.classList.add('hover-open');
         }
       });
       el.addEventListener('mouseout', function() {
         if(body.classList.contains('sidebar-icon-only')) {
           el.classList.remove('hover-open');
         }
       });
     });
     }

     KayitListele() {
      this.fbServis.KayitListeleByUID(this.uid).snapshotChanges().subscribe(data => {
        this.kayitlar = [];
        data.forEach(satir => {
          const y = { ...satir.payload.toJSON(), key: satir.key };
          this.kayitlar.push(y as Kayit);
        });
      });
    }
    OturumKapat() {
      this.fbServis.OturumKapat().then(d => {
        localStorage.removeItem("user");
        this.router.navigate(['/giris']);
      }); }
  
    getSideBarState() {
      return this.sidebarservice.getSidebarState();
    }
  
    toggle(currentMenu) {
      if (currentMenu.type === 'dropdown') {
        this.menus.forEach(element => {
          if (element === currentMenu) {
            currentMenu.active = !currentMenu.active;
          } else {
            element.active = false;
          }
        });
      }
    }
  
    getState(currentMenu) {
  
      if (currentMenu.active) {
        return 'down';
      } else {
        return 'up';
      }
    }
  
    hasBackgroundImage() {
      return this.sidebarservice.hasBackgroundImage;
    }
  
  }
  
