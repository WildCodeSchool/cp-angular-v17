import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cupcake } from '../models/cupcake.model';
import { Accessory } from '../models/accessory.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);

  private apiCupcakesUrl = 'http://localhost:4000/cupcakes';

  private apiAccessoryUrl = 'http://localhost:4000/accessories';


  private cupcakeSubscription!: Subscription;

  getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(this.apiCupcakesUrl);
  }

  getAccessories(): Observable<Accessory[]> {
    return this.http.get<Accessory[]>(this.apiAccessoryUrl);
  }

  getAccessoriesId(): any {
    this.cupcakeSubscription = this.http.get<Cupcake[]>(this.apiCupcakesUrl).subscribe(
      data => console.log('Données reçues:', data),
            
    );
  }
}
