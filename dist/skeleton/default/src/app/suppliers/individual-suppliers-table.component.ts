import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { ScriptLoaderService } from '../_services/script-loader.service';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-individual-suppliers-table',
  templateUrl: './individual-suppliers-table.component.html',
  styles: []
})
export class IndividualSuppliersTableComponent
  implements OnInit, AfterViewInit {

  suppliers: any[];
  errorMessage: string;

  constructor(
    private _script: ScriptLoaderService,
    private _supplierService: SupplierService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this._supplierService.getSuppliers().subscribe(suppliers => {
      this.createDatatable(suppliers);
    }, error => this.errorMessage = <any>error);
  }

  private createDatatable( parentData: any[] = [], childData: any[] = [] ) {
    const dataJSONArray = parentData;
    // == Class definition
    const Datatable = function () {

      // == Private functions
      var subTableInit = function (e) {
        $('<div/>').attr('id', 'child_data_' + e.data.RecordID).appendTo(e.detailCell).mDatatable({
          data: {
            type: 'local',
            source: e.data.Orders,
            pageSize: 10,
            saveState: {
              cookie: true,
              webstroage: true
            },
          },
          // layout definition
          layout: {
            theme: 'default',
            scroll: true,
            height: 300,
            footer: false,
            // enable/disable datatable spinner.
            spinner: {
              type: 1,
              theme: 'default',
            },
          },
          sortable: true,
          // columns definition
          columns: [
            {
              field: 'OrderID',
              title: 'Order ID',
              sortable: false,
            }, {
              field: 'ShipCountry',
              title: 'Country',
              width: 100,
            }, {
              field: 'ShipAddress',
              title: 'Ship Address',
            }, {
              field: 'ShipName',
              title: 'Ship Name',
            }, {
              field: 'OrderDate',
              title: 'Order Date',
            }, {
              field: 'TotalPayment',
              title: 'Total Payment',
            }, {
              field: 'Status',
              title: 'Status',
              // callback function support for column rendering
              template: function (row) {
                var status = {
                  1: { 'title': 'Pending', 'class': 'm-badge--brand' },
                  2: { 'title': 'Delivered', 'class': ' m-badge--metal' },
                  3: { 'title': 'Canceled', 'class': ' m-badge--primary' },
                  4: { 'title': 'Success', 'class': ' m-badge--success' },
                  5: { 'title': 'Info', 'class': ' m-badge--info' },
                  6: { 'title': 'Danger', 'class': ' m-badge--danger' },
                  7: { 'title': 'Warning', 'class': ' m-badge--warning' },
                };
                return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
              },
            }, {
              field: 'Type',
              title: 'Type',
              // callback function support for column rendering
              template: function (row) {
                var status = {
                  1: { 'title': 'Online', 'state': 'danger' },
                  2: { 'title': 'Retail', 'state': 'primary' },
                  3: { 'title': 'Direct', 'state': 'accent' },
                };
                return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + status[row.Type].state + '">' +
                  status[row.Type].title + '</span>';
              },
            },
          ],
        });
      };
      // demo initializer
      var mainTableInit = function () {
        var datatable = $('.m_datatable').mDatatable({
          // datasource definition
          data: {
            type: 'local',
            source: dataJSONArray,
            pageSize: 10,
          },
          // layout definition
          layout: {
            theme: 'default',
            scroll: true,
            height: null,
            footer: false,
          },
          sortable: true,
          filterable: true,
          pagination: true,
          detail: {
            title: 'Load sub table',
            content: subTableInit,
          },
          search: {
            input: $('#generalSearch'),
          },
          // columns definition
          columns: [
            {
              field: 'RecordID',
              title: '',
              sortable: false,
              width: 20,
              textAlign: 'center' // left|right|center,
            }, {
              field: 'FirstName',
              title: 'First Name',
            }, {
              field: 'LastName',
              title: 'Last Name',
            }, {
              field: 'Company',
              title: 'Company',
            }, {
              field: 'Email',
              title: 'Email',
            }, {
              field: 'Phone',
              title: 'Phone',
            }, {
              field: 'Status',
              title: 'Status',
              // callback function support for column rendering
              template: function (row) {
                var status = {
                  1: { 'title': 'Pending', 'class': 'm-badge--brand' },
                  2: { 'title': 'Delivered', 'class': ' m-badge--metal' },
                  3: { 'title': 'Canceled', 'class': ' m-badge--primary' },
                  4: { 'title': 'Success', 'class': ' m-badge--success' },
                  5: { 'title': 'Info', 'class': ' m-badge--info' },
                  6: { 'title': 'Danger', 'class': ' m-badge--danger' },
                  7: { 'title': 'Warning', 'class': ' m-badge--warning' },
                };
                return '<span class="m-badge ' + status[row.Status].class + ' m-badge--wide">' + status[row.Status].title + '</span>';
              },
            }, {
              field: 'Type',
              title: 'Type',
              // callback function support for column rendering
              template: function (row) {
                var status = {
                  1: { 'title': 'Online', 'state': 'danger' },
                  2: { 'title': 'Retail', 'state': 'primary' },
                  3: { 'title': 'Direct', 'state': 'accent' },
                };
                return '<span class="m-badge m-badge--' + status[row.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + status[row.Type].state + '">' +
                  status[row.Type].title + '</span>';
              },
            }, {
              field: 'Actions',
              width: 110,
              title: 'Actions',
              sortable: false,
              overflow: 'visible',
              template: function (row, index, datatable) {
                var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
                return '\
						<div class="dropdown ' + dropup + '">\
							<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">\
                                <i class="la la-ellipsis-h"></i>\
                            </a>\
						  	<div class="dropdown-menu dropdown-menu-right">\
						    	<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\
						    	<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\
						  	</div>\
						</div>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
							<i class="la la-edit"></i>\
						</a>\
						<a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\
					';
              },
            }
          ],
        });
      };
      return {
        //== Public functions
        init: function () {
          // init dmeo
          mainTableInit();
        },
      };
    } ();
    Datatable.init();
  }
}
