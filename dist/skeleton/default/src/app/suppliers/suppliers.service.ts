import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map} from 'rxjs/operators';
import {flatMap} from "rxjs/internal/operators";
import {forkJoin} from "rxjs/internal/observable/forkJoin";

@Injectable({
    providedIn: 'root'
})

export class SuppliersService {
    private individualAgentsUrl = '../../api/suppliers/indiv-agents.json';

    constructor(private _http: HttpClient) { }

    getSuppliers(): Observable<any[]> {
        return this._http.get<any[]>(this.individualAgentsUrl).pipe(
            catchError(this.handleError), );
    }
    // todo: use supplier type
    getSuppliersById(supplierId, supplierType = 0): Observable<any[]> {
        return this.getSuppliers().pipe(
            flatMap(suppliers => suppliers),
            filter((supplier: any) => { return supplier.id === supplierId && supplier.supplierType === supplierType; })
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


