import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { AsyncPipe } from '@angular/common';
import { map, Observable, Subscription } from 'rxjs';
import { Accessory } from '../../models/accessory.model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [
    CupcakeComponent,
    AsyncPipe,
    FormsModule,
    RouterLink
  ],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  cupcakes!: Cupcake[];
  accessories$!: Observable<Accessory[]>;
  cupcakeSubscription!: Subscription;
  accessoryId: string = '';
  private apiService: ApiService = inject(ApiService);

  ngOnInit() {
    this.cupcakeSubscription = this.apiService.getCupcakes().subscribe((data => {
      this.cupcakes = data;
    }))
    this.accessories$ = this.apiService.getAccessories();

  }

  filterByAccessory() {
    this.cupcakeSubscription = this.apiService.getCupcakes().subscribe(data => {
      if (this.accessoryId) {
        this.cupcakes = data.filter(cupcake => cupcake.accessory_id === this.accessoryId);    
      } else {
        this.cupcakes = data ;   
      }
    });

  }

  ngOnDestroy() {
    this.cupcakeSubscription.unsubscribe();
  }
}
