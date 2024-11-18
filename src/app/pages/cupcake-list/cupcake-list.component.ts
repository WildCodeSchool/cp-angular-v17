import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  api : ApiService = inject(ApiService);
  cupcakes! : Cupcake[];
  cupcakesSubscription! : Subscription;

  ngOnInit() : void {
    this.cupcakesSubscription = this.getCupcakes().subscribe({
      next: response => this.cupcakes = response,
      error: error => console.log(error)
    });
  }

  ngOnDestroy() : void {
    this.cupcakesSubscription.unsubscribe();
  }

  getCupcakes() : Observable<any> {
    return this.api.fetchCupcakes();
  }

  // Step 3: get all accessories

}
