import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupcake } from '../models/cupcake.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http : HttpClient = inject(HttpClient);
  private apiUrl : string = 'http://localhost:4000';

  fetchCupcakes() : Observable<Cupcake[]>{
    return this.http.get<Cupcake[]>(this.apiUrl + '/cupcakes');
  }
}
