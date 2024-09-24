import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private readonly http: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url).pipe(catchError((error) => of([])));
  }

  // searchCountry(term: string): Observable<Country[]> {}

  // searchRegion(region: string): Observable<Country[]> {}
}
