import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Cupcake } from '../models/cupcake.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  public getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>('http://localhost:4000/cupcakes');
  }
}
