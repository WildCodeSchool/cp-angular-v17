import { Cupcake } from './../models/cupcake.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accessory } from '../models/accessories.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4000'

  // Instance of httpClient
  private http : HttpClient = inject(HttpClient);
  constructor() { }

  getCupcakes (): Observable<Cupcake[]>{
    return this.http.get<Cupcake[]>(`${this.baseUrl}/cupcakes`)
  }

  getAccessories(): Observable<Accessory[]>{
    return this.http.get<Accessory[]>(`${this.baseUrl}/accessories`)
  }

  getCupcakeById(cupcakeId: number): Observable<Cupcake>{
    return this.http.get<Cupcake>(`${this.baseUrl}/cupcakes/${cupcakeId}`)
  }
}
