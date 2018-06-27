import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../theme/layouts/layout.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from '../theme/pages/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
  ], exports: [
    RouterModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class HomeModule { }
