import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
    selector: "app-extensions-keytable",
    templateUrl: "./extensions-keytable.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ExtensionsKeytableComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this._script.loadScripts('app-extensions-keytable',
            ['assets/vendors/custom/datatables/datatables.bundle.js',
                'assets/demo/default/custom/crud/datatables/extensions/keytable.js']);

    }

}