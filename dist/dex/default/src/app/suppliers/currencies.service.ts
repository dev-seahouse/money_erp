import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs/index';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CurrenciesService {

    private currenciesUrl = '../../api/suppliers/currency-types.json';
    constructor(private http: HttpClient) { }

    getCurrencyTypes(): Observable<any[]> {
        return this.http.get<any[]>(this.currenciesUrl).pipe(
            catchError(this.handleError),
        );
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