import { inject, Injectable } from '@angular/core';
import { Cupcakes } from '../models/cupcake.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accessories } from '../models/accessories.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  cupcakes: Cupcakes[] = [];

  private baseUrl = 'http://localhost:4000';

  private http = inject(HttpClient);

  getCupcakes(): Observable<Cupcakes[]> {
    return this.http.get<Cupcakes[]>(`${this.baseUrl}/cupcakes`);
  }

  getAccessories(): Observable<Accessories[]> {
    return this.http.get<Accessories[]>(`${this.baseUrl}/accessories`);
  }
  constructor() {}
}
