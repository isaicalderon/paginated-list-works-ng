import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor(private _httpClient: HttpClient) { }

  // private _filters = 'filter=type:journal-article';
  private _filters = '';

  getAllWorks(): Observable<any> {
    return this._httpClient.get(`${environment.api}?${this._filters}`).pipe(
      map(res => res)
    );
  }

  getByQuery(query: string): Observable<any>  {
    return this._httpClient.get(`${environment.api}?query=${query}&${this._filters}`).pipe(
      map(res => res)
    );
  }

  getByDOI(doi: string): Observable<any> {
    return this._httpClient.get(`${environment.api}/${doi}?${this._filters}`).pipe(
      map(res => res)
    );
  }

}
