import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../helpers';
import { ScriptLoaderService } from '../_services/script-loader.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: []
})
export class SupplierListComponent implements OnInit, AfterViewInit {
  constructor(private _script: ScriptLoaderService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._script.loadScripts('app-supplier-list',
      ['assets/demo/default/custom/crud/metronic-datatable/child/data-local.js']);
  }
}
