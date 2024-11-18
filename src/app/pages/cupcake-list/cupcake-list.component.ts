import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Subscription } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { CommonModule } from '@angular/common';
import { Accessory } from '../../models/accesories.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, CommonModule, FormsModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes

  cupcakes: Cupcake[] = [];
  cupcakeSubscription!: Subscription;

  accessories: Accessory[] = [];
  accessorySubscription!: Subscription;

  selectedAccessory: string = '';

  private apiService: ApiService = inject(ApiService);

  ngOnInit() {
    this.cupcakeSubscription = this.apiService
      .getCupcakes()
      .subscribe((response) => {
        console.log('Cupcakes reçus :', response);
        this.cupcakes = response;
      });

    // Step 3: get all accessories
    this.accessorySubscription = this.apiService
      .getAccessoryById()
      .subscribe((response) => {
        console.log('Accessoires reçus :', response);
        this.accessories = response;
      });
  }
  ngOnDestroy() {
    this.cupcakeSubscription.unsubscribe();
    this.accessorySubscription.unsubscribe();
  }

  getFilteredCupcakes(): Cupcake[] {
    if (!this.selectedAccessory) {
      return this.cupcakes; // Si aucun accessoire n'est sélectionné, renvoyer la liste complète
    }
    return this.cupcakes.filter(
      (cupcake) => cupcake.accessory_id.toString() === this.selectedAccessory
    );
  }
}
