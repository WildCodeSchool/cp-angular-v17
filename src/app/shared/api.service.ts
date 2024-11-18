import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupcake } from '../models/cupcake.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:4000/cupcakes';

  getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(this.apiUrl);
  }
}
