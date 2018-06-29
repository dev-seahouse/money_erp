import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../_services/script-loader.service';

@Component({
  selector: 'app-individual-suppliers-table',
  templateUrl: './individual-suppliers-table.component.html',
  styles: []
})
export class IndividualSuppliersTableComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this._script.loadScript('app-individual-suppliers-table', 'assets/demo/default/custom/crud/metronic-datatable/child/data-local.js');
  }
}
