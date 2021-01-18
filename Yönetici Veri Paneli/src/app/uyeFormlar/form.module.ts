import { UyeFormlarComponent } from './../uyeFormlar/uyeFormlar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: 'basic-elements', component: UyeFormlarComponent }
]

@NgModule({
  declarations: [UyeFormlarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ]
})
export class FormModule { }
