import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cupcake } from '../models/cupcake.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  http = inject(HttpClient);
  cupcakeUrl = 'http://localhost:4000/cupcakes';

  //Vient d'être ajouté: cupcake
  cupcake: Cupcake = {
    id: 0,
    accessory_id: 0,
    url: '',
    color1: '',
    color2: '',
    color3: '',
    name: '',
  };

  getAllCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(this.cupcakeUrl);
  }
}
