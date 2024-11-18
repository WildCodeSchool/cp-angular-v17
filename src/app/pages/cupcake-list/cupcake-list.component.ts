import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { Accessory } from '../../models/accesory.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, FormsModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  private apiService = inject(ApiService);
  allCupcakes!: Cupcake[];
  // Step 3: get all accessories
  allAccessories!: Accessory[];
  accessorySelected!: number | string;

  // liste des cupcakes avec accessoire sélectionné
  filteredCupcakes!: Cupcake[];
  ngOnInit() {
    this.apiService
      .getCupcakes()
      .subscribe((data) => (this.allCupcakes = data));

    this.apiService
      .getAccessories()
      .subscribe((data) => (this.allAccessories = data));
  }

  filterCupcakes() {
    this.filteredCupcakes = this.allCupcakes.filter(
      (cupcake) => cupcake.accessory_id === this.accessorySelected
    );
    console.log(this.accessorySelected);
  }
}
