import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { catchError, filter } from "rxjs/operators";
import { throwError } from "rxjs/index";

@Injectable({
    providedIn: 'root'
})
export class RatesService {
    private ratesUrl = "../../api/suppliers/rates.json";

    constructor(private _http: HttpClient) { }

    getRates(): Observable<any[]> {
        return this._http.get<any>(this.ratesUrl).pipe(
            catchError(this.handleError),
        );
    }

    getRatesByCurrencyId(cid: number): Observable<any[]> {
        return this.getRates().pipe(
            filter((rate: any) => rate.currencyId === cid),
            catchError(this.handleError)
        )
    }

    private handleError(err) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
