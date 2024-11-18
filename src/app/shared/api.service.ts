import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupcake } from '../models/cupcake.model';
import { Accessory } from '../models/accessory.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {}

  private apiUrl = 'http://localhost:4000';

  private http = inject(HttpClient);

  getCupcakes():Observable<Cupcake[]>{
    return this.http.get<Cupcake[]>(`${this.apiUrl}/cupcakes`);
  }

  getAccessories():Observable<Accessory[]>{
    return this.http.get<Accessory[]>(`${this.apiUrl}/accessories`)
  }

}
