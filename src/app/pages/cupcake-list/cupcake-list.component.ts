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
  // Step 1: get all cupcakes
  cupcakes$!: Observable<Cupcake[]>;
  // Step 3: get all accessories
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

  /*onSelectChange(){
    const target = event.target as HTMLSelectElement;
    this.accessoryId = Number(target.value);
    console.log('Selected accessory ID:', this.accessoryId);
  }*/

  onSelectChange() {
    if (this.accessoryId !== 0) {
      this.cupcakes$ = this.getAllCupcakes().pipe(
        map(cupcakes => this.filterCupcakes(cupcakes))
      );
      console.log('Selected accessory ID:', this.accessoryId);
      console.log('Cupcakes:', this.cupcakes$);
    } else{
      this.cupcakes$ = this.getAllCupcakes();
    }
  }

  filterCupcakes(cupcakes: Cupcake[]): Cupcake[] {
    return cupcakes.filter(cupcake => cupcake.accessory_id === this.accessoryId);
  }
}
