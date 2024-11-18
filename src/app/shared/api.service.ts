import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cupcake } from '../models/cupcake.model';
import { Accessory } from '../models/accessory.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient)

  constructor() { }

  getCupcakes() {
    return this.http.get<Cupcake[]>('http://localhost:4000/cupcakes');
  }

  getCupcake(id: string) {
    return this.http.get<Cupcake>(`http://localhost:4000/cupcakes/${id}`);
  }

  getAccessories() {
    return this.http.get<Accessory[]>('http://localhost:4000/accessories');
  }
}
