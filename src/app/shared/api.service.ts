import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupcake } from '../models/cupcake.model';
import { Accessory } from '../models/accesories.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private cupcakeUrl = 'http://localhost:4000/cupcakes';
  private accessoryUrl = 'http://localhost:4000/accessories';
  private http = inject(HttpClient);

  constructor() {}

  getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(this.cupcakeUrl);
  }

  getAccessoryById(): Observable<Accessory[]> {
    return this.http.get<Accessory[]>(this.accessoryUrl);
  }
}
