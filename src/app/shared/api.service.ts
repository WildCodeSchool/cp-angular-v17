import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cupcake} from "../models/cupcake.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl="http://localhost:4000/cupcakes";

  private http: HttpClient = inject(HttpClient);

  getCupcakes() {
    return this.http.get<Cupcake>(`${this.apiUrl}`);
  }

}
