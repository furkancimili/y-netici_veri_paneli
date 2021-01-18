import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {
  lineChartData = [{
    label: 'Aylık Makale Okunma Sayısı (Bin)',
    data: [25,35,23,32,40,33,31,28,36,39,45,52],
    borderWidth: 1,
    fill: true
  }];

  lineChartLabels = ["Ocak", "Şubat", "Mart", "Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];

  lineChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  lineChartColors = [
    {
      borderColor: 'rgba(255,99,132,1)'
    }
  ];

  barChartData = [{
    label: '',
    data: [14, 18,6,10,8],
    borderWidth: 1,
    fill: false
  }];

  barChartLabels = ["Robotik", "Yazılım", "Grafik", "Donanım","Yapay Zeka"];

  barChartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    elements: {
      point: {
        radius: 0
      }
    }
  };

  barChartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 1)',
        'rgba( 0 , 255,  0 , 0.2)',
        'rgba(255 ,192,  0 , 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba( 0 , 255,  0 , 1)',
        'rgba(255 ,192,  0 , 1)'

      ]
    }
  ];
  areaChartData1 = [{
    label: 'Beğeni Sayısı',
    data: [100, 120,45,60,80],
    borderWidth: 1,
    fill: true
  }];

  areaChartData = [{
    label: 'Yorum Sayısı',
    data: [10, 19, 3, 8,6],
    borderWidth: 1,
    fill: true
  }];

  areaChartLabels = ["Robotik", "Yazılım", "Grafik", "Donanım", "Yapay Zeka"];

  areaChartOptions = {};

  areaChartColors = [
    {
      borderColor: 'rgba(255,99,132,1)',
      backgroundColor: 'rgba(255,99,132,.2)'
    }
  ];
  doughnutPieChartData = [
    {
      data: [20,70],
    }
  ];

  doughnutPieChartLabels = ["Kadın", "Erkek"];

  doughnutPieChartOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  doughnutPieChartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ]
    }
  ];


  scatterChartData = [
    {
      label: 'First Dataset',
      data: [{
          x: -10,
          y: 0
        },
        {
          x: 0,
          y: 3
        },
        {
          x: -25,
          y: 5
        },
        {
          x: 40,
          y: 5
        }
      ],
      borderWidth: 1
    },
    {
      label: 'Second Dataset',
      data: [{
          x: 10,
          y: 5
        },
        {
          x: 20,
          y: -30
        },
        {
          x: -25,
          y: 15
        },
        {
          x: -10,
          y: 5
        }
      ],
      borderWidth: 1
    }
  ];

  scatterChartOptions = {
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom'
      }]
    }
  };

  scatterChartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)'      ]
    },
    {
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
