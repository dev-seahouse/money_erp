import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuppliersComponent } from './suppliers.component';
import { DefaultComponent } from '../theme/pages/default/default.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../theme/layouts/layout.module';
import { IndividualSuppliersTableComponent } from './individual-suppliers-table.component';
import { CorporateSuppliersTableComponent } from './corporate-suppliers-table.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [
            {
                path: '',
                component: SuppliersComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        RouterModule.forChild(routes),
        LayoutModule,
    ],
    exports: [RouterModule],
    declarations: [SuppliersComponent, SharedComponent, IndividualSuppliersTableComponent, CorporateSuppliersTableComponent, ],
})
export class SuppliersModule { }
