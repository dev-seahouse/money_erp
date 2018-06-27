import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {WidgetsClipboardComponent} from './widgets-clipboard.component';
import {LayoutModule} from '../../../../../../layouts/layout.module';
import {DefaultComponent} from '../../../../default.component';

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": WidgetsClipboardComponent
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
        WidgetsClipboardComponent
    ]
})
export class WidgetsClipboardModule {


}