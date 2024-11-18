import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { Subscription } from 'rxjs';
import { Accessory } from '../../models/accessory.model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, FormsModule, RouterLink],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  private apiService = inject(ApiService);
  private cupcakeSubscription!: Subscription;
  private accessorySubscription!: Subscription;

  public cupcakes!: Cupcake[];
  public selectedCupcakes!: Cupcake[];
  public accessories!: Accessory[];
  public selectedAccessory: string = '';

  ngOnInit() {
    this.cupcakeSubscription = this.apiService.getCupcakes().subscribe(data => {
      this.cupcakes = data;
      this.selectedCupcakes = data;
    });
    this.accessorySubscription = this.apiService.getAccessories().subscribe(data => {
      this.accessories = data;
    });
  }

  ngOnDestroy() {
    this.cupcakeSubscription.unsubscribe();
    this.accessorySubscription.unsubscribe();
  }

  public selectAccessory(): void {
    if (this.selectedAccessory != '') {
      this.selectedCupcakes = this.cupcakes.filter((cupcake) => cupcake.accessory_id === this.selectedAccessory);
    } else {
      this.selectedCupcakes = this.cupcakes;
    }
  }

  // Step 3: get all accessories

}
