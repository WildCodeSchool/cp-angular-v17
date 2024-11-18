import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUri: string = 'http://localhost:4000/'

  constructor(private http: HttpClient) {}

  getCupcakes(): Observable<any> {
    return this.http.get(this.apiUri+ 'cupcakes')
  }

  getCupcakeById(id: number): Observable<any> {
    return this.http.get(this.apiUri+ 'cupcakes/' + id)
  }

  getAccessories(): Observable<any> {
    return this.http.get(this.apiUri+"accessories")
  }
}
