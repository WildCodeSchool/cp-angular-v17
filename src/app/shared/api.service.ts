import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Cupcake } from '../models/cupcake.model';
import { Accessory } from '../models/accessories.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  apiRootUrl = 'http://localhost:4000';

  private cupcakesSignal = signal<Cupcake[]>([]);
  private accessoriesSignal = signal<Accessory[]>([]);

  get cupcakes() {
    return this.cupcakesSignal;
  }

  get accessories() {
    return this.accessoriesSignal;
  }

  fetchCupcakes(): void {
    this.http.get<Cupcake[]>(`${this.apiRootUrl}/cupcakes`).subscribe({
      next: (data) => this.cupcakesSignal.set(data),
      error: (error) => console.error('Error on fetching cupcakes', error),
    });
  }

  fetchAccessories() {
    this.http.get<Accessory[]>(`${this.apiRootUrl}/accessories`).subscribe({
      next: (data) => this.accessoriesSignal.set(data),
      error: (error) => console.error('Error on fetching accessories', error),
    });
  }
}
