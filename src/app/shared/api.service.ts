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

  private apiUrl = 'http://localhost:4000/';
  private http = inject(HttpClient);

  // Méthode pour récupérer tous les articles
  getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(this.apiUrl + "cupcakes");
  }

  getAccessories(): Observable<Accessory[]> {
    return this.http.get<Accessory[]>(this.apiUrl + "accessories");
  }

  // Méthode pour récupérer un article par id
  getCupcakeById(id: number): Observable<Cupcake> {
    return this.http.get<Cupcake>(this.apiUrl + "cupcakes/" + id);
  }
}
