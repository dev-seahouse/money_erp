import {Component, OnInit} from '@angular/core';
import {SuppliersService} from './suppliers.service';
import {CurrenciesService} from './currencies.service';
import {RatesService} from './rates.service';
import {flatMap, map} from 'rxjs/operators';
import {forkJoin} from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-individual-suppliers-table',
  templateUrl: './individual-suppliers-table.component.html',
  styles: []
})
export class IndividualSuppliersTableComponent implements OnInit {

  suppliers: any[];
  currencies: any[];
  rates: any[];
  processedData: any[];
  errorMessage: string;
  readonly SUPPLIER_TYPE = 0;

  constructor(private _suppliersService: SuppliersService,
              private _currenciesService: CurrenciesService,
              private _ratesService: RatesService
  ) {
  }

  ngOnInit(): void {
    this.prepareDataTable();
  }

  private prepareDataTable() {
    forkJoin(
      this._currenciesService.getCurrencyTypes(),
      this._suppliersService.getSuppliers(this.SUPPLIER_TYPE),
      this._ratesService.getRates()
    ).subscribe(data=>{
      this.setDate(data);
      this.processedData = this.processData(this.currencies, this.suppliers, this.rates);
      this.initDataTable(this.processedData);
    });

  }

  private setDate(data) {
    this.currencies = data[0];
    this.suppliers = data[1];
    this.rates = data[2];
  }

  private processData(currencies: any[], suppliers: any[], rates: any[]) {
    currencies.map(currency=> {

      currency.rates = rates.filter(rate => ( +currency.id === +rate.currencyId) && (+rate.supplierType === this.SUPPLIER_TYPE));

      rates.map(rate => {
        rate.supplier = suppliers.filter( supplier => {
          return (rate.supplierType === supplier.supplierType) && (rate.supplierId === supplier.id);
        })[0];
        return rate;
      });

      const ratesSum = Object.keys(currency.rates).reduce((prev,key) => +prev + currency.rates[key].rate,0)
      currency.avgRate = ratesSum / currency.rates.length;
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
                title: 'Agent Code',
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
                title: 'Agent Name',
                width: 120,
                field: 'agentName',
                template: row => {
                  return `${row.supplier.fName} ${row.supplier.lName}`;
                }
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
                title: "Phone",
                field: 'supplier.phone',
                width: 150,
                sortable: false,
                filterable: true,
              },
              {
                title: "Email",
                field: 'supplier.email',
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
                    0: {'title': 'Blocked', 'class': 'm-badge--danger'},
                    1: {'title': 'Inactive', 'class': 'm-badge--metal'},
                    2: {'title': 'Active', 'class': 'm-badge--success'}
                  };
                  return '<span class="m-badge ' + status[+row.supplier.activeStatus].class + ' m-badge--wide">' + status[row.supplier.activeStatus].title + '</span>';
                }
              }

            ]

          });

        childTable.sort('rate','asc');
      };
      parentTable  = $('.m-datatable').mDatatable({
        data: {
          saveState: {webstorage: true, cookie: false},
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
        childTable.search( ($(this).val() as string ), 'supplier.activeStatus');
      });

      $('#m_form_type').on('change', function () {
        parentTable.search(($(this).val() as string).toLowerCase(), 'Type');
      });

      $('#m_form_status, #m_form_type').selectpicker();

      parentTable.sort('avgRate', 'asc');

    })

  }


}

