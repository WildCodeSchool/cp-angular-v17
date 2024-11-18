import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cupcake } from '../models/cupcake.model';
import { Observable } from 'rxjs';
import { Accessory } from '../models/accessory.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  private http = inject(HttpClient);
  cupcakeUrl = 'http://localhost:4000/cupcakes';
  accessoryUrl = 'http://localhost:4000/accessories';


  getAllCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(this.cupcakeUrl);
  }

  getAllAccessories(): Observable<Accessory[]> {
    return this.http.get<Accessory[]>(this.accessoryUrl);
  }
}
