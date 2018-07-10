import { Component, OnInit } from '@angular/core';
import {SuppliersService} from "./suppliers.service";
import {CurrenciesService} from "./currencies.service";
import {RatesService} from "./rates.service";

@Component({
  selector: 'app-corporate-suppliers-table',
  templateUrl: './corporate-suppliers-table.component.html',
  styles: []
})
export class CorporateSuppliersTableComponent implements OnInit {

  currencies: any[];
  errorMessage: string;


  constructor(private _suppliersService: SuppliersService,
              private _currenciesService: CurrenciesService,
              private _ratesService: RatesService
              ) { }

  ngOnInit() {

  }

}
