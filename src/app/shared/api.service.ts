import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cupcake} from "../models/cupcake.model";
import {Accessory} from "../models/accessory.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http: HttpClient = inject(HttpClient);

  getCupcakes() {
    return this.http.get<Cupcake[]>("http://localhost:4000/cupcakes");
  }

  getAccessories() {
    return this.http.get<Accessory[]>(`http://localhost:4000/accessories`);
  }

}
