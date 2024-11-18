import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { Accessory } from '../../models/accessory.model';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  
  api : ApiService = inject(ApiService);
  
  cupcakes! : Cupcake[];
  accessories! : Accessory[];
  cupcakesSubscription! : Subscription;
  accessoriesSubscription! : Subscription;

  ngOnInit() : void {
    this.cupcakesSubscription = this.getCupcakes().subscribe({
      next: response => this.cupcakes = response,
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

  getCupcakes() : Observable<Cupcake[]> {
    return this.api.fetchCupcakes();
  }

  getAccessories() : Observable<Accessory[]> {
    return this.api.fetchAccessories();
  }

  // Step 3: get all accessories

}
