import { Component, OnInit } from '@angular/core';
import {SuppliersService} from "./suppliers.service";
import {CurrenciesService} from "./currencies.service";
import {RatesService} from "./rates.service";
import {forkJoin} from "rxjs/internal/observable/forkJoin";

@Component({
  selector: 'app-corporate-suppliers-table',
  templateUrl: './corporate-suppliers-table.component.html',
  styles: []
})
export class CorporateSuppliersTableComponent implements OnInit {

  currencies: any[];
  suppliers: any[];
  rates: any[];
  processedCurrencies: any[];

  errorMessage: string;

  constructor(private _suppliersService: SuppliersService,
              private _currenciesService: CurrenciesService,
              private _ratesService: RatesService
              ) { }

  ngOnInit() {
    this.prepareDataTable();
  }

  private prepareDataTable() {
    forkJoin(
      this._currenciesService.getCurrencyTypes(),
      this._suppliersService.getSuppliers(1),
      this._ratesService.getRates()
    ).subscribe(
      data => {
        this.currencies = data[0];
        this.suppliers = data[1];
        this.rates = data[2];
        this.processedCurrencies = this.processCurrenciesData(this.currencies, this.suppliers, this.rates);
        this.initDataTable(this.processedCurrencies);
      }, err => this.errorMessage += <any>(err)
    );
  }

  private processCurrenciesData(currencies: any[], suppliers: any[], rates: any[]) {
    currencies.map(currency=> {

      currency.rates = rates.filter(rate => ( +currency.id === +rate.currencyId) && (+rate.supplierType === 1));

      rates.map(rate => {
        rate.supplier = suppliers.filter( supplier => {
          return (rate.supplierType === supplier.supplierType) && (rate.supplierId === supplier.id);
        })[0];
        return rate;
      });

      currency.numAgents = currency.rates.length;
      return currency;

    });

    return currencies;
  }


  private initDataTable(currencies: any[] = [] ){

    // todo: extract this into a class
    let childTable;
    let parentTable;

    $(function () {
      let childInitializer = parentTableData => {

        const currencyObj = currencies.find((obj) => +obj.id === +parentTableData.data.currencyId);

        console.log("the currency obect is :");
        console.log(currencyObj);

        childTable = $('<div/>')
          .attr('id', 'suppliers_for_currency_' + parentTableData.data.currencyId)
          .appendTo(parentTableData.detailCell)
          .mDatatable({
            data: {
              type: 'local',
              source: currencyObj.rates,
              pageSize: 15,
              saveState: {
                cookie: false,
                localStorage: true
              }
            },
            sortable: true,
            columns: [
              {
                title: '',
                field: 'supplier.id',
                sortable: false,
                filterable: false,
                textAlign: 'center',
                width: 20,
                overflow: 'hidden',
                template: row => {
                  return "<div style='color:transparent'>" + row.supplier.id + "</div>";
                }
              },
              {
                title: 'Corporate Code',
                field: 'supplier.code',
                sortable: true,
                filterable: true,
                width: 100
              },
              {
                title: 'Average Rate',
                field: 'rate',
                width: 80,
                type: 'number',
                sortable: 'asc'
              },
              {
                title: 'Corporate Name',
                width: 120,
                field: 'supplier.companyName',
                filterable: true
              },
              {
                title: "Payout Partner?",
                field: "supplier.isPayoutPartner",
                sortable: true,
                filterable: true,
                width: 100,
                template: function (row) {
                  return row.supplier.isPayoutPartner === 'y' ? 'Yes' : "No"
                },
                sortCallback: (data, sort, column) => {
                  let field = column['field'];
                  let values = {"Yes": 1, "No": 0, "y": 1, "n": 0}
                  return $(data).sort((a, b) => {
                    let aField = a.supplier.isPayoutPartner;
                    aField = values[aField];
                    let bField = b.supplier.isPayoutPartner;
                    bField = values[bField];

                    if (sort === 'asc') {
                      return aField > bField ? 1 : aField < bField ? -1 : 0;
                    } else {
                      return aField < bField ? 1 : aField > bField ? -1 : 0;
                    }
                  })
                }
              },
              {
                title: "Registration number",
                field: 'supplier.companyRegNo',
                filterable: true,
                sortable: false
              },
              {
                title: "Phone",
                field: 'supplier.companyPhone',
                width: 150,
                sortable: false,
                filterable: true,
              },
              {
                title: "Email",
                field: 'supplier.companyEmail',
                width: 210,
                sortable: false,
                filterable: true
              },
              {
                title: "Status",
                field: 'supplier.activeStatus',
                width: 150,
                sortable: 'desc',
                filterable: true,
                template: row => {
                  var status = {
                    2: {'title': 'Active', 'class': 'm-badge--success'},
                    1: {'title': 'Inactive', 'class': 'm-badge--metal'},
                    0: {'title': "Blocked", 'class': 'm-badge--danger'}
                  };
                  console.log(row.supplier.activeStatus);
                  return '<span class="m-badge ' + status[row.supplier.activeStatus].class + ' m-badge--wide">' + status[row.supplier.activeStatus].title + '</span>';
                }
              }

            ]

          });
      };
      parentTable  = $('.m-datatable').mDatatable({
        data: {
          saveState: {webstroage: true, cookie: true},
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
          content: childInitializer
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
            width: 400,
            type: 'number'
          },
          {
            field: 'numAgents',
            title: 'Individual Agent',
            width: 200,
            type: 'number'
          },
          {
            field: 'avgRate',
            title: 'Average Rate',
            width: 500,
            type: 'number',
            sortable: 'asc'
          }
        ]
      });

      $('#m_form_status').on('change', function () {
        childTable.search(($(this).val() as string).toLowerCase(), 'supplier.activeStatus');
      });

      $('#m_form_type').on('change', function () {
        childTable.search(($(this).val() as string).toLowerCase(), 'Type');
      });

      $('#m_form_status, #m_form_type').selectpicker();

    })

  }

}
