import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cupcake } from '../models/cupcake.model';
import { Observable } from 'rxjs';
import { Accessories } from '../models/accessories.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private baseApiUrl = 'http://localhost:4000';

  getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(`${this.baseApiUrl}/cupcakes`);
  }

  getAccessories(): Observable<Accessories[]> {
    return this.http.get<Accessories[]>(`${this.baseApiUrl}/accessories`);
  }

  filterCupcakes(cupcakes: Cupcake[], selectedAccessoryId: string): Cupcake[] {
    return selectedAccessoryId
      ? cupcakes.filter(
          (cupcake) => cupcake.accessory_id === selectedAccessoryId
        )
      : cupcakes;
  }
}
