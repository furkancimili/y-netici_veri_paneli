import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  toggleProBanner(event) {
    console.log("123");
    event.preventDefault();
    document.querySelector('body').classList.toggle('removeProbanner');
  }

  constructor() { }

  ngOnInit() {
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

}
