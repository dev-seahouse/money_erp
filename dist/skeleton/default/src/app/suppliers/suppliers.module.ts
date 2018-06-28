import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SupplierListComponent } from './supplier-list/supplier-list.component';

@NgModule({
    imports: [
        CommonModule,
        SuppliersRoutingModule
    ],
    declarations: [SupplierListComponent]
})
export class SuppliersModule { }
