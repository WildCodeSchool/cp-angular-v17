import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cupcake } from '../models/cupcake.model';
import { Observable } from 'rxjs';
import { Accessory } from '../models/accesory.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);

  getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>('http://localhost:4000/cupcakes');
  }
  getAccessories(): Observable<Accessory[]> {
    return this.http.get<Accessory[]>('http://localhost:4000/accessories');
  }
}
