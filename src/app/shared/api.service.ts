import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cupcake } from '../models/cupcake.model';
import { Accessory } from '../models/accessory.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4000';
  constructor(private http: HttpClient) { };

  getCupCakes():Observable<any>{
    return this.http.get(`${this.baseUrl}/cupcakes`)
  }

  getAccessories():Observable<any>{
    return this.http.get(`${this.baseUrl}/accessories`)
  }
}
