import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { CupcakesList } from '../../models/cupcake.model';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { AccessoriesList } from '../../models/accessorie.model';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent implements OnInit, OnDestroy {
  // Step 1: get all cupcakes
  public readonly cupcakesService = inject(ApiService);
  public cupcakes!: CupcakesList;
  public accessories!: AccessoriesList;
  private subscription!: Subscription;

  // Step 3: get all accessories

  ngOnInit(): void {
    this.subscription = forkJoin<{
      cupcakes: Observable<CupcakesList>;
      accessories: Observable<AccessoriesList>;
    }>({
      cupcakes: this.cupcakesService.getCupcakes(),
      accessories: this.cupcakesService.getAccessories(),
    }).subscribe(({ cupcakes, accessories }) => {
      this.cupcakes = cupcakes;
      this.accessories = accessories;
      console.log('list de cupcakes', this.cupcakes);
      console.log("list d'accessoires", this.accessories);
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
