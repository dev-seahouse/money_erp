import { Component, OnInit, AfterViewInit } from '@angular/core';
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

  constructor( private _supplierService: SupplierService ) {}

  ngOnInit(): void {
    this._supplierService.getSuppliers().subscribe(suppliers => {
      // this.createDatatable(suppliers);
      this.suppliers = suppliers;
    }, error => (this.errorMessage = <any>error));
  }

  ngAfterViewInit(): void {
    this.initDatatable();
  }

  private initDatatable() {

    const SuppliersDatatable = (function() {
      let childTable;
      let parentTable;
      const initializeDatatable = function() {
        childTable = function(e) {
          $('<div/>')
            .attr('id', 'suppliers_for_currency_' + e.data.currencyId)
            .appendTo(e.detailCell)
              .mDatatable({
              });
        };
        parentTable = $('.m-datatable').mDatatable({
          data: {
            saveState: { webstroage: true, cookie: true },
            pageSize: 15
          },
          layout: {
            theme: 'default',
            scroll: false,
            height: null,
            footer: false
          },
          sortable: true,
          pagination: true,
          detail: {
            title: 'Load sub tablte',
            content: childTable
          },
          search: {
            input: $('#generalSearch')
          },
          columns: [
            {
              field: 'currencyId',
              title: '#',
              width: 20,
              textAlign: 'center',
              type: 'number',
              sortable: false
            },
            {
              field: 'currencyName',
              title: 'Currency Name',
              width: 190,
              type: 'number'
            },
            {
              field: 'numAgents',
              title: 'Individual Agent',
              width: 100,
              type: 'number'
            },
            {
              field: 'avgRate',
              title: 'Average Rate',
              width: 500,
              type: 'number'
            }
          ]
        });

        $('#m_form_status').on('change', function() {
          parentTable.search(($(this).val() as string).toLowerCase(), 'Status');
        });

        $('#m_form_type').on('change', function() {
          parentTable.search(($(this).val() as string).toLowerCase(), 'Type');
        });

        $('#m_form_status, #m_form_type').selectpicker();
      };

      return {
        init: function() {
          initializeDatatable();
        },
        getChildTable: function() {
            return childTable;
        },
        getParentTable: function() {
            return parentTable;
        }
      };
    })();

    SuppliersDatatable.init();
    //# sourceMappingURL=html-table.js.map
  }

  private createDatatable(parentData: any[] = [], childData: any[] = []) {
    const dataJSONArray = parentData;
    // == Class definition
    const Datatable = (function() {
      // == Private functions
      let subTableInit = function(e) {
        $('<div/>')
          .attr('id', 'child_data_for_record_' + e.data.RecordID)
          .appendTo(e.detailCell)
          .mDatatable({
            data: {
              type: 'local',
              source: e.data.Orders,
              pageSize: 15,
              saveState: {
                cookie: true,
                webstroage: true
              }
            },
            // layout definition
            layout: {
              theme: 'default',
              scroll: false,
              height: null,
              footer: false,
              // enable/disable datatable spinner.
              spinner: {
                type: 1,
                theme: 'default'
              }
            },
            sortable: true,
            // columns definition
            columns: [
              {
                field: 'OrderID',
                title: 'Order ID',
                sortable: false
              },
              {
                field: 'ShipCountry',
                title: 'Country',
                width: 100
              },
              {
                field: 'ShipAddress',
                title: 'Ship Address'
              },
              {
                field: 'ShipName',
                title: 'Ship Name',
                template: `{{OrderID}} - {{ShipCountry}}`
              },
              {
                field: 'OrderDate',
                title: 'Order Date'
              },
              {
                field: 'TotalPayment',
                title: 'Total Payment'
              },
              {
                field: 'Status',
                title: 'Status',
                // callback function support for column rendering
                template: function(row) {
                  let status = {
                    1: { title: 'Pending', class: 'm-badge--brand' },
                    2: { title: 'Delivered', class: ' m-badge--metal' },
                    3: {
                      title: 'Canceled',
                      class: ' m-badge--primary'
                    },
                    4: { title: 'Success', class: ' m-badge--success' },
                    5: { title: 'Info', class: ' m-badge--info' },
                    6: { title: 'Danger', class: ' m-badge--danger' },
                    7: { title: 'Warning', class: ' m-badge--warning' }
                  };
                  return (
                    '<span class="m-badge ' +
                    status[row.Status].class +
                    ' m-badge--wide">' +
                    status[row.Status].title +
                    '</span>'
                  );
                }
              },
              {
                field: 'Type',
                title: 'Type',
                // callback function support for column rendering
                template: function(row) {
                  let status = {
                    1: { title: 'Online', state: 'danger' },
                    2: { title: 'Retail', state: 'primary' },
                    3: { title: 'Direct', state: 'accent' }
                  };
                  return (
                    '<span class="m-badge m-badge--' +
                    status[row.Type].state +
                    ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' +
                    status[row.Type].state +
                    '">' +
                    status[row.Type].title +
                    '</span>'
                  );
                }
              }
            ]
          });
      };
      // demo initializer
      let mainTableInit = function() {
        let datatable = $('.m_datatable').mDatatable({
          // datasource definition
          data: {
            type: 'local',
            source: dataJSONArray,
            pageSize: 10
          },
          // layout definition
          layout: {
            theme: 'default',
            scroll: true,
            height: null,
            footer: false
          },
          sortable: true,
          filterable: true,
          pagination: true,
          detail: {
            title: 'Load sub table',
            content: subTableInit
          },
          search: {
            input: $('#generalSearch')
          },
          // columns definition
          columns: [
            {
              field: 'RecordID',
              title: '',
              sortable: false,
              width: 20,
              textAlign: 'center' // left|right|center,
            },
            {
              field: 'Currency',
              title: 'Currency',
              width: 100
            },
            {
              field: 'Individual Agent',
              title: 'Individual Agent',
              width: 150
            },
            {
              field: 'Average Rate',
              title: 'Average Rate',
              width: 150
            }
          ]
        });
      };
      return {
        //== Public functions
        init: function() {
          // init dmeo
          mainTableInit();
        }
      };
    })();
    Datatable.init();
  }
}
