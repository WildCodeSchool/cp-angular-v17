import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Cupcake } from '../models/cupcake.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  apiRootUrl = 'http://localhost:4000';

  private cupcakesSignal = signal<Cupcake[]>([]);

  get cupcakes() {
    return this.cupcakesSignal;
  }

  fetchCupcakes(): void {
    this.http.get<Cupcake[]>(`${this.apiRootUrl}/cupcakes`).subscribe({
      next: (data) => this.cupcakesSignal.set(data),
      error: (error) => console.error('Error on fetching cupcakes', error),
    });
  }
}
