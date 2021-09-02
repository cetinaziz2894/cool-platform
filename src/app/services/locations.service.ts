import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Location } from '../models/Locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private locationsUrl = 'http://localhost:3001/locations';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.locationsUrl)
      .pipe(
        tap(_ => this.log('fetched locations')),
        catchError(this.handleError<Location[]>('Locations', []))
      );
  }

  
  searchLocations(term: string): Observable<Location[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Location[]>(`${this.locationsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found locations matching "${term}"`) :
         this.log(`no locations matching "${term}"`)),
      catchError(this.handleError<Location[]>('searchLocations', []))
    );
  }

  addLocation(location:Location):Observable<Location> {
    console.log(location);
    return this.http.post<Location>(this.locationsUrl,location,this.httpOptions)
      .pipe(
        catchError(this.handleError('addLocation', location))
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
