import { SidebarService } from './../shared/sidebarUye/sidebar.service';
import { Kayit } from '../model/kayit';
import { FbservisService } from '../services/fbservis4.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-uyePaneli',
  templateUrl: './uyePaneli.component.html',
  styleUrls: ['./uyePaneli.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class UyePaneliComponent implements OnInit {
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
  date: Date = new Date();

  visitSaleChartData = [{
    label: 'Kaybedilen Kullanıcı',
    data: [9.234, 14.123, 15.523, 8.457, 6.645, 15.756, 8.345, 9.365],
    borderWidth: 1,
    fill: false,
  },
  {
    label: 'Aktif Kullanıcı',
    data: [35.123, 31.765, 28.480, 48.457, 40.534, 55.435, 60.435,82.754],
    borderWidth: 1,
    fill: false,
  },
  {
    label: 'Ziyaretçi Sayısı',
    data: [45.123, 40.534, 38.634, 59.523, 65.342, 75.234, 65.234, 75.541],
    borderWidth: 1,
    fill: false,
  }];

  visitSaleChartLabels = ["2015", "2016", "2017", "2018", "2019", "2020"];

  visitSaleChartOptions = {
    responsive: true,
    legend: false,
    scales: {
        yAxes: [{
            ticks: {
                display: false,
                min: 0,
                stepSize: 20,
                max: 80
            },
            gridLines: {
              drawBorder: false,
              color: 'rgba(235,237,242,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            }
        }],
        xAxes: [{
            gridLines: {
              display:false,
              drawBorder: false,
              color: 'rgba(0,0,0,1)',
              zeroLineColor: 'rgba(235,237,242,1)'
            },
            ticks: {
                padding: 20,
                fontColor: "#9c9fa6",
                autoSkip: true,
            },
            categoryPercentage: 0.4,
            barPercentage: 0.4
        }]
      }
  };

  visitSaleChartColors = [
    {
      backgroundColor: [
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
      ],
      borderColor: [
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
        'rgba(154, 85, 255, 1)',
      ]
    },
    {
      backgroundColor: [
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
      ],
      borderColor: [
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(254, 112, 150, 1)',
      ]
    },
    {
      backgroundColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
      ],
      borderColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
        'rgba(177, 148, 250, 1)',
      ]
    },
    {
      backgroundColor: [
        'rgba( 0 , 255,  0 , 1)',
        'rgba( 0 , 255,  0 , 1)',
        'rgba( 0 , 255,  0 , 1)',
        'rgba( 0 , 255,  0 , 1)',
        'rgba( 0 , 255,  0 , 1)',
        'rgba( 0 , 255,  0 , 1)',
      ],
      borderColor: [
        'rgba( 0 , 255,  0 , 1)',
        'rgba( 0 , 255,  0 , 1)',
        'rgba( 0 , 255,  0 , 1)',
        'rgba( 0 , 255,  0 , 1)',
        'rgba( 0 , 255,  0 , 1)',
        'rgba( 0 , 255,  0 , 1)',
      ]
    },
    {
      backgroundColor: [
        'rgba(255 ,192,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
      ],
      borderColor: [
        'rgba(255 ,192,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
      ]
    },
    
  ];

  trafficChartData = [
    {
      data: [30, 25, 20,15,10],
    }
  ];

  trafficChartLabels = ["Yazılım", "Robotik", "Donanım","Yapay Zeka","Grafik"];

  trafficChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    legend: false,
  };

  trafficChartColors = [
    {
      backgroundColor: [
        'rgba(177, 148, 250, 1)',
        'rgba(254, 112, 150, 1)',
        'rgba(132, 217, 210, 1)',
        'rgba( 0 , 255,  0 , 1)',
        'rgba(255 ,192,  0 , 1)',
      ],
      borderColor: [
        'rgba(177, 148, 250, .2)',
        'rgba(254, 112, 150, .2)',
        'rgba(132, 217, 210, .2)',
        'rgba( 0 , 255,  0 , 1)' ,
        'rgba(255 ,192,  0 , 1)',
      ]
    }
  ];
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
