import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupcake } from '../models/cupcake.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:4000';
  private http: HttpClient = inject(HttpClient);

  getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(`${this.apiUrl}/cupcakes`)
  }
  getAccessories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/accessories`)
  }

}
