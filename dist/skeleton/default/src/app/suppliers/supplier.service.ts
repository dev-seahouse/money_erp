import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SupplierService {
  private suppliersUrl = '../../api/suppliers/suppliers.json';

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<any[]> {
    return this.http.get<any[]>(this.suppliersUrl).pipe(
      tap(data => console.log('All suppliers data: ' + JSON.stringify(data))),
      catchError( this.handleError ), );
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


