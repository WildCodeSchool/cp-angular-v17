import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Accessory, Cupcake } from '../models/cupcake.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http=inject(HttpClient);

  private cupcakeUrl="http://localhost:4000";

  getCupCakes(){
    return this.http.get<Cupcake[]>(`${this.cupcakeUrl}/cupcakes`)
  }

  getAccessories(){
    return this.http.get<Accessory[]>(`${this.cupcakeUrl}/accessories`)
  }
}
