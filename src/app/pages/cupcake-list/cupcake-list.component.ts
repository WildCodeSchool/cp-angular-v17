import {Component, inject} from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import {Cupcake} from "../../models/cupcake.model";
import {ApiService} from "../../shared/api.service";
import {map, Observable} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";
import {Accessory} from "../../models/accessory.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, AsyncPipe, CommonModule, FormsModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {

  cupcakes$!: Observable<Cupcake[]>;
  accessories$!: Observable<Accessory[]>;
  accessoryId: number = 0

  private apiService: ApiService = inject(ApiService);

  ngOnInit() {
    this.cupcakes$ = this.getAllCupcakes();
    this.accessories$ = this.getAllAccessories();
  }

  getAllCupcakes() : Observable<Cupcake[]> {
   return this.apiService.getCupcakes();
  }

  getAllAccessories() : Observable<Accessory[]> {
    return this.apiService.getAccessories();
  }

  onSelectChange() {
    this.cupcakes$ = this.getAllCupcakes().pipe(
      map(cupcakes => {
        console.log('Cupcakes avant filtre:', cupcakes);
        return  this.filterCupcakes(cupcakes);
      })
    );
    console.log('Selected accessory ID:', this.accessoryId);
    console.log('Cupcakes:', this.cupcakes$);
  }

  filterCupcakes(cupcakes: Cupcake[]): Cupcake[] {
    if (this.accessoryId === 0) {
      return cupcakes;
    }
    return cupcakes.filter(cupcake => cupcake.accessory_id === this.accessoryId);
  }
}
