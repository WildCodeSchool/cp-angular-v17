import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CupcakesList } from '../models/cupcake.model';
import { AccessoriesList } from '../models/accessorie.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly CUPCAKES_API_URL = 'http://localhost:4000/cupcakes';
  private readonly ACCESSORIES_API_URL = 'http://localhost:4000/accessories';
  private readonly http = inject(HttpClient);

  getCupcakes(): Observable<CupcakesList> {
    return this.http.get<CupcakesList>(this.CUPCAKES_API_URL);
  }

  getAccessories(): Observable<AccessoriesList> {
    return this.http.get<AccessoriesList>(this.ACCESSORIES_API_URL);
  }

  constructor() {}
}
