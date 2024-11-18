import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4000'

  // Instance of httpClient
  private http : HttpClient = inject(HttpClient);
  constructor() { }

  getCupcakes (): Observable<any>{
    return this.http.get(`${this.baseUrl}/cupcakes`)
  }
}
