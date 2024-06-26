import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsStickyActionBarComponent } from './layouts-sticky-action-bar.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": LayoutsStickyActionBarComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule
    ], exports: [
        RouterModule
    ], declarations: [
        LayoutsStickyActionBarComponent
    ]
})
export class LayoutsStickyActionBarModule {


}