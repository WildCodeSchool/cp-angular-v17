import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { CupcakesList } from '../../models/cupcake.model';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { AccessoriesList } from '../../models/accessorie.model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, FormsModule, RouterLink],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent implements OnInit, OnDestroy {
  // Step 1: get all cupcakes
  public readonly cupcakesService = inject(ApiService);
  private cupcakes!: CupcakesList;
  public filteredCupcakes!: CupcakesList;
  public accessories!: AccessoriesList;
  private subscription!: Subscription;
  public selectedAccessoryId: string = '';

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
      this.filteredCupcakes = [...this.cupcakes];
      this.accessories = accessories;
    });
  }

  //methods
  getSelectedCupcakes(accessorieId: string): void {
    if (accessorieId === '') {
      this.filteredCupcakes = [...this.cupcakes];
      return;
    }
    this.filteredCupcakes = this.cupcakes.filter(
      (cupcake) => cupcake.accessory_id === String(this.selectedAccessoryId)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
