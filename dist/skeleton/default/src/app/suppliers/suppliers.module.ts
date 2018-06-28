import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './shared/shared.component';
import { SupplierListComponent } from './supplier-list.component';
import { DefaultComponent } from '../theme/pages/default/default.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../theme/layouts/layout.module';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: SupplierListComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule],
  exports:[RouterModule],
  declarations: [SupplierListComponent, SharedComponent]
})
export class SuppliersModule {}
