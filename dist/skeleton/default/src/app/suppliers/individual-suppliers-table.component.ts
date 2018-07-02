import { Component, OnInit, AfterViewInit } from '@angular/core';
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
    ) { }

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
        //== Class definition

        var DatatableHtmlTableDemo = (function() {
            //== Private functions

            // demo initializer
            var demo = function() {
                var datatable = $('.m-datatable').mDatatable({
                    data: {
                        saveState: { webstroage: true },
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
                        content: e => {
                            console.log('init subtatble script');
                        }
                    },
                    search: {
                        input: $('#generalSearch')
                    },
                    columns: [
                        {
                            field: 'CurrencyID',
                            title: '',
                            sortable: false,
                            filterable: false,
                            width: 20,
                            textAlign: 'center',
                        },
                        {
                            field: 'Currency',
                            title: 'Currency Name',
                            width: 150
                        },
                        {
                            field: 'Individual Agent',
                            title: 'Individual Agent',
                            width: 100
                        },
                        {
                            field: 'Average Rate',
                            title: 'Average Rate',
                            width: 150
                        }
                    ]
                });

                $('#m_form_status').on('change', function() {
                    datatable.search(
                        ($(this)
                            .val() as string)
                            .toLowerCase(),
                        'Status'
                    );
                });

                $('#m_form_type').on('change', function() {
                    datatable.search(
                        ($(this)
                            .val() as string)
                            .toLowerCase(),
                        'Type'
                    );
                });

                $('#m_form_status, #m_form_type').selectpicker();
            };

            return {
                //== Public functions
                init: function() {
                    // init dmeo
                    demo();
                }
            };
        })();

        jQuery(document).ready(function() {
            DatatableHtmlTableDemo.init();
        });
        //# sourceMappingURL=html-table.js.map
    }

    private createDatatable(parentData: any[] = [], childData: any[] = []) {
        const dataJSONArray = parentData;
        // == Class definition
        const Datatable = (function() {
            // == Private functions
            var subTableInit = function(e) {
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
                                    var status = {
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
                                    var status = {
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
            var mainTableInit = function() {
                var datatable = $('.m_datatable').mDatatable({
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
