import { Component, inject, OnInit } from '@angular/core';
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
export class CupcakeListComponent implements OnInit {
  cupcakes!: Cupcake[];
  originalCupcakes!: Cupcake[];

  accessories$!: Observable<Accessory[]>;
  cupcakeSubscription!: Subscription;
  accessoryId: string = '';
  private apiService: ApiService = inject(ApiService);

  ngOnInit() {
    this.cupcakeSubscription = this.apiService.getCupcakes().subscribe((data => {
      this.originalCupcakes = data;
      this.cupcakes = data;

    }))
    this.accessories$ = this.apiService.getAccessories();

  }

  filterByAccessory() {
    if (this.accessoryId) {
      this.cupcakes = this.originalCupcakes.filter(originalCupcake => originalCupcake.accessory_id === this.accessoryId);    
    } else {
      this.cupcakes = this.originalCupcakes;   
    }
  }

  ngOnDestroy() {
    this.cupcakeSubscription.unsubscribe();
  }
}
