import { inject, Injectable } from '@angular/core';
import { Cupcakes } from '../models/cupcake.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  cupcakes: Cupcakes[] = [];

  private apiURL = 'http://localhost:4000/cupcakes';

  private http = inject(HttpClient);

  getCupcakes(): Observable<Cupcakes[]> {
    return this.http.get<Cupcakes[]>(this.apiURL);
  }
  constructor() {}
}
