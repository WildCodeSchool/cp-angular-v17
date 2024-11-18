import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Cupcake } from '../models/cupcake.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:4000';
  private http = inject(HttpClient);

  public getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(this.apiUrl+'/cupcakes');
  }

  public getAccessories(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/accessories');
  }

  public getCupcakeById(id: number): Observable<Cupcake> {
    return this.http.get<Cupcake>(`${this.apiUrl}/cupcakes/${id}`);
  }
}
