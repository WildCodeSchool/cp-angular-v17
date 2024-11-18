import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Subscription } from 'rxjs';
import { Accessorie, Cupcake } from '../../models/cupcake.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, CommonModule, FormsModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  cupcakes: Cupcake[] = [];
  accessories: Accessorie[] = [];
  selectedAccesorieId: string = '';
  filteredCupcakes: Cupcake[] = [];
  
  private apiService: ApiService = inject(ApiService);

  private cupcakeSubscription!: Subscription;
  private accessorieSubscription!: Subscription;

  ngOnInit() {
    // Step 1: get all cupcakes
    this.cupcakeSubscription = this.apiService
      .getCupcakes()
      .subscribe((response) => {
        this.cupcakes = response;
        this.filteredCupcakes = response;
      });
    // Step 3: get all accessories
    this.accessorieSubscription = this.apiService
    .getAccessories()
    .subscribe((response) => {
      this.accessories = response;
    })
  }

  ngOnDestroy() {
    this.cupcakeSubscription.unsubscribe();
    this.accessorieSubscription.unsubscribe();
  }

  filterCupcakes() {
      if (!this.selectedAccesorieId) {
        this.filteredCupcakes = this.cupcakes;
      } else {
        this.filteredCupcakes = this.cupcakes.filter(
          (cupcake) => cupcake.accessory_id === this.selectedAccesorieId
        );
      }
    };
  }
