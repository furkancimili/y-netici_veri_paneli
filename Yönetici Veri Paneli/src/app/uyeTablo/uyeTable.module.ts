import { UyeTabloComponent } from './uyeTablo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'basic-table', component: UyeTabloComponent }
]

@NgModule({
  declarations: [UyeTabloComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TablesModule { }
