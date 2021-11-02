import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Administrator } from '../models/Administrator';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdministratorsService {

  private administratorsgUrl = environment.apiUrl+'administrators';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAdministrators(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(this.administratorsgUrl)
      .pipe(
        tap(_ => this.log('fetched Administrator')),
        catchError(this.handleError<Administrator[]>('Administrator', []))
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
