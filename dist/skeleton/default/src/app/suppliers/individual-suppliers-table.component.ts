import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { SupplierService } from './supplier.service';
import {CurrenciesService} from './currencies.service';
import {RatesService} from './rates.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-individual-suppliers-table',
  templateUrl: './individual-suppliers-table.component.html',
  styles: []
})
export class IndividualSuppliersTableComponent
  implements OnInit {
  suppliers: any[];
  currencies: any[];
  rates: any[];
  errorMessage: string;

  constructor( private _supplierService: SupplierService,
               private _currenciesService: CurrenciesService,
               private _ratesService: RatesService
               ) {}

  ngOnInit(): void {
    forkJoin(
      this._currenciesService.getCurrencyTypes(),
      this._supplierService.getSuppliers(),
      this._ratesService.getRates()
    ).subscribe(
      data => {
        this.currencies = data[0];
        this.suppliers = data[1];
        this.rates = data[2];
        this.initDatatable(this.rates, this.currencies, this.suppliers);
      }, err => this.errorMessage += <any>(err)
    );
  }

  private initDatatable(rates: any [] = [], currencyTypes: any[] = [], indivAgents: any[] = []) {

    const SuppliersDatatable = (function() {
      let childTable;
      let parentTable;
      const initializeDatatable = function() {
        childTable = function(e) {
          console.log(e.data);
          const currencyId = e.data.currencyId;
          const filteredRates = rates.filter((o) => {
            return +(o.currencyId) === +currencyId;
          });

          console.log(filteredRates);

          $('<div/>')
            .attr('id', 'suppliers_for_currency_' + e.data.currencyId)
            .appendTo(e.detailCell)
              .mDatatable({
                data: {
                  type: 'local',
                  source: filteredRates,
                  pageSize: 15,
                  saveState: {
                    cookie: true
                  }
                },
                sortable: true,
                columns: [
                  {
                    title: '',
                    field: 'rateId',
                    sortable: false,
                    filterable: false,
                    textAlign: 'center',
                    width: 20,
                    overflow: 'hidden',

                  },
                  {
                    title: 'Average Rate',
                    field: 'rate',
                    width: 120,
                    sortable: 'asc'
                  },
                  {
                    title: 'Agent Name',
                    field: 'supplierId',
                  }
                ]

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
              textAlign: 'center',
              type: 'number',
              sortable: false,
              width: 20
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
    $(document).ready(function() {
      SuppliersDatatable.init();
    });
    // # sourceMappingURL=html-table.js.map
  }
}
