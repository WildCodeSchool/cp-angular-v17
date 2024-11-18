import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupcakes } from '../models/cupcake.model';
import { Accessories } from '../models/accessories.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4000'

  // Instance of httpClient
  private http : HttpClient = inject(HttpClient);
  constructor() { }

  getCupcakes (): Observable<Cupcakes[]>{
    return this.http.get<Cupcakes[]>(`${this.baseUrl}/cupcakes`)
  }

  getAccessories(): Observable<Accessories[]>{
    return this.http.get<Accessories[]>(`${this.baseUrl}/accessories`)
  }
}
