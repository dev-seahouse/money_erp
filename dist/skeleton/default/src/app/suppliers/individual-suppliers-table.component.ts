import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { SupplierService } from './supplier.service';
import { CurrenciesService } from './currencies.service';
import { RatesService } from './rates.service';
import { filter, flatMap, map, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs/observable/forkJoin';

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

    constructor(private _supplierService: SupplierService,
        private _currenciesService: CurrenciesService,
        private _ratesService: RatesService
    ) {
    }

    ngOnInit(): void {

        this._currenciesService.getCurrencyTypes().pipe(
            flatMap((currencies: any[], ) => {
                return forkJoin(currencies.map((currency: any) => {
                    currency.agents = [];
                    currency.numAgents = 0;

                    let ratesRequests = this._ratesService.getRatesByCurrencyId(currency.id).pipe(
                        flatMap((rate: any) => {
                            currency.agents.push(rate);
                            currency.numAgents++;

                            let supplierRequest = this._supplierService.getSuppliersById(rate.supplierId).pipe(
                                map((supplier: any) => { rate.supplier = supplier; return currency })
                            );

                            return supplierRequest;
                        }),
                    );
                    return ratesRequests;
                    // return currency; // should return an observable object
                }));
            },
            ),
        ).subscribe(data => {
            this.currencies = data;
            this.initDatatable(this.currencies);
        });

        // forkJoin(
        //   this._currenciesService.getCurrencyTypes(),
        //   this._supplierService.getSuppliers(),
        //   this._ratesService.getRates()
        // ).subscribe(
        //   data => {
        //     this.currencies = data[0];
        //     this.suppliers = data[1];
        //     this.rates = data[2];
        //     this.initDatatable(this.rates, this.currencies, this.suppliers);
        //   }, err => this.errorMessage += <any>(err)
        // );
    }

    private initDatatable(currencies: any[] = [], rates: any[] = [], indivAgents: any[] = []) {

        const SuppliersDatatable = (function() {
            let childTable;
            let parentTable;
            const initializeDatatable = function() {
                childTable = function(e) {
                    const currencyId = e.data.currencyId;
                    console.log(currencyId);
                    const currencyObj = currencies.find((obj) => +obj.id === +currencyId);

                    $('<div/>')
                        .attr('id', 'suppliers_for_currency_' + e.data.currencyId)
                        .appendTo(e.detailCell)
                        .mDatatable({
                            data: {
                                type: 'local',
                                source: currencyObj.agents,
                                pageSize: 15,
                                saveState: {
                                    cookie: true
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

                                },
                                {
                                    title: 'Agent Code',
                                    field: 'supplier.code',
                                    sortable: true,
                                    filterable: true,
                                    width: 100

                                },
                                {
                                    title: 'Agent Name',
                                    field: 'supplier.name',
                                    sortable: true,
                                    filterable: true,
                                    width: 120

                                },
                                {
                                    title: 'Average Rate',
                                    field: 'rate',
                                    width: 80,
                                    type: 'number',
                                    sortable: 'asc'
                                },
                                {
                                    title: "Payout Partner?",
                                    field: "supplier.isPayoutPartner",
                                    sortable: true,
                                    filterable: true,
                                    width: 100,
                                    template: function(row) {
                                        return row.supplier.isPayoutPartner === 'y' ? 'Yes' : "No"
                                    },
                                    sortCallback: (data, sort, column)=>{
                                        let field = column['field'];
                                        let values= {"Yes": 1, "No": 0, "y": 1, "n" : 0}
                                        return $(data).sort((a,b)=>{
                                            let aField = a.supplier.isPayoutPartner;
                                            aField=values[aField];
                                            let bField = b.supplier.isPayoutPartner;
                                            bField=values[bField];

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
                                    sortable: true,
                                    filterable: false,
                                    template: row => {
                                        var status = {
                                            'Active': { 'title': 'Active', 'class': 'm-badge--success' },
                                            "Inactive": { 'title:': 'Inactive', 'class': 'm-badge--metal' },
                                            "Blocked": { 'title': "Blocked", 'class': 'm-badge--danger' }
                                        };
                                        return '<span class="m-badge ' + status[row.supplier.activeStatus].class + ' m-badge--wide">' + status[row.supplier.activeStatus].title + '</span>';
                                    }
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
