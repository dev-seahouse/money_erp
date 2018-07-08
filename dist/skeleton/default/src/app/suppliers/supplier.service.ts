import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, filter, concatMap, tap, mergeMap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SupplierService {
    private individualAgentsUrl = '../../api/suppliers/indiv-agents.json';

    constructor(private _http: HttpClient) { }

    getSuppliers(): Observable<any[]> {
        return this._http.get<any[]>(this.individualAgentsUrl).pipe(
            //tap(data => console.log('All suppliers data: ' + JSON.stringify(data))),
            catchError(this.handleError), );
    }
    // todo: use supplier type
    getSuppliersById(supplierId, supplierType = 0): Observable<any[]> {
        return this.getSuppliers().pipe(
          mergeMap(supplier=>supplier),
            filter((supplier: any) =>{ return supplier.id === supplierId; })
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


