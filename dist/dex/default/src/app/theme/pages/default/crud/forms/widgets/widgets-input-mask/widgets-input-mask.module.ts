import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsInputMaskComponent } from './widgets-input-mask.component';
import { LayoutModule } from '../../../../../../layouts/layout.module';
import { DefaultComponent } from '../../../../default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsInputMaskComponent
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
        WidgetsInputMaskComponent
    ]
})
export class WidgetsInputMaskModule {


}