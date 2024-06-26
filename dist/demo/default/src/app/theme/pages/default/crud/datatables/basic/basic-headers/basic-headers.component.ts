import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../../_services/script-loader.service';


@Component({
  selector: "app-basic-headers",
  templateUrl: "./basic-headers.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class BasicHeadersComponent implements OnInit, AfterViewInit {


  constructor(private _script: ScriptLoaderService) {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    this._script.loadScripts('app-basic-headers',
      ['assets/vendors/custom/datatables/datatables.bundle.js',
        'assets/demo/default/custom/crud/datatables/basic/headers.js']);

  }

}
