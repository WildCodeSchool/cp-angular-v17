import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
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
  
  private api : ApiService = inject(ApiService);

  cupcakes! : Cupcake[];
  accessories! : Accessory[];
  cupcakesSubscription! : Subscription;
  accessoriesSubscription! : Subscription;

  filterValue : string = '';
  filteredCupcakes! : Cupcake[];

  ngOnInit() : void {
    this.cupcakesSubscription = this.getCupcakes().subscribe({
      next: response => {
        this.cupcakes = response;
        this.filterCupcakes();
      },
      error: error => console.log(error)
    });

    this.accessoriesSubscription = this.getAccessories().subscribe({
      next: response => this.accessories = response,
      error: error => console.log(error)
    });
  }

  ngOnDestroy() : void {
    this.cupcakesSubscription.unsubscribe();
    this.accessoriesSubscription.unsubscribe();
  }

  filterCupcakes() : void {
    this.filterValue !== ''
      ? this.filteredCupcakes = this.cupcakes.filter(cupcake => cupcake.accessory_id === this.filterValue)
      : this.filteredCupcakes = this.cupcakes
  }

  getCupcakes() : Observable<Cupcake[]> {
    return this.api.fetchCupcakes();
  }

  getAccessories() : Observable<Accessory[]> {
    return this.api.fetchAccessories();
  }
}
