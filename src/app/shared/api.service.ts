import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Cupcake } from '../models/cupcake.model';
import { Accessory } from '../models/accessories.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  baseUrl = 'http://localhost:4000';

  private cupcakeSignal = signal<Cupcake | undefined>(undefined);
  private cupcakesSignal = signal<Cupcake[]>([]);
  private accessoriesSignal = signal<Accessory[]>([]);
  private selectedAccessoryIdSignal = signal<string>('');

  get cupcakes() {
    return computed(() => {
      const accessoryId = this.selectedAccessoryIdSignal();
      const cupcakes = this.cupcakesSignal();
      return accessoryId.length > 0
        ? cupcakes.filter((cupcake) => cupcake.accessory_id === accessoryId)
        : cupcakes;
    });
  }

  get accessories() {
    return this.accessoriesSignal;
  }

  get cupcake() {
    return this.cupcakeSignal;
  }

  setAccessory(accessory: string) {
    this.selectedAccessoryIdSignal.set(accessory);
  }

  fetchCupcakeById(id: string) {
    const url = `${this.baseUrl}/cupcakes/${id}`;
    console.log(url);
    return this.http.get<Cupcake>(url).subscribe({
      next: (data) => this.cupcake.set(data),
      error: (error) => console.error('Error on fetching cupcake by id', error),
    });
  }

  fetchCupcakes(): void {
    this.http.get<Cupcake[]>(`${this.baseUrl}/cupcakes`).subscribe({
      next: (data) => this.cupcakesSignal.set(data),
      error: (error) => console.error('Error on fetching cupcakes', error),
    });
  }

  fetchAccessories() {
    this.http.get<Accessory[]>(`${this.baseUrl}/accessories`).subscribe({
      next: (data) => this.accessoriesSignal.set(data),
      error: (error) => console.error('Error on fetching accessories', error),
    });
  }
}
