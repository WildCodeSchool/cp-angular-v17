import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  private apiService = inject(ApiService);
  private cupcakeSubscription!: Subscription;

  public cupcakes!: Cupcake[];

  ngOnInit() {
    this.cupcakeSubscription = this.apiService.getCupcakes().subscribe(data => {
      this.cupcakes = data;
    });
  }

  ngOnDestroy() {
    this.cupcakeSubscription.unsubscribe();
  }

  // Step 3: get all accessories

}
