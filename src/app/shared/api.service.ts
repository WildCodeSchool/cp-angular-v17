import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cupcake } from '../models/cupcake.model';
import { Accessory } from '../models/accessory.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor() {}

    http: HttpClient = inject(HttpClient);
    getCupcakes(): Observable<Cupcake[]> {
        return this.http.get<Cupcake[]>('http://localhost:4000/cupcakes');
    }
    getCupcakesAccessories(): Observable<Accessory[]> {
        return this.http.get<Accessory[]>('http://localhost:4000/accessories');
    }
}
