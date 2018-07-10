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
        
      }, err => this.errorMessage += <any>(err)
    );
  }

  private processCurrenciesData(currencies: any[], suppliers: any[], rates: any[]) {
    currencies.map(currency=> {

      currency.rates = rates.filter(rate => ( +currency.id === +rate.currencyId) && (+rate.supplierType === 1));

      rates.map(rate => {
        let supplierOfCurrency = suppliers.filter( supplier => {
          return rate.supplierType === supplier.supplierType && rate.supplierID === supplier.id;
        })

        rate.supplier = supplierOfCurrency;
        return rate;
      });
      return currency;
    });
    console.log(currencies);
    return currencies;
  }
}
