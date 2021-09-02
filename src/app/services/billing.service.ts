import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Billing } from '../models/Billing';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private billingUrl = 'http://localhost:3001/billing';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getBilling(): Observable<Billing[]> {
    return this.http.get<Billing[]>(this.billingUrl)
      .pipe(
        tap(_ => this.log('fetched billing')),
        catchError(this.handleError<Billing[]>('billing', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message)
  }
}
