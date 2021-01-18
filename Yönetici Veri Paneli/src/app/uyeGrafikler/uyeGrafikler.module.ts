import { UyeGrafiklerComponent } from './../uyeGrafikler/uyeGrafikler.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
const routes: Routes = [
  { path: 'chartjs', component: UyeGrafiklerComponent },
]

@NgModule({
  declarations: [UyeGrafiklerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule
  ]
})
export class ChartsDemoModule { }
