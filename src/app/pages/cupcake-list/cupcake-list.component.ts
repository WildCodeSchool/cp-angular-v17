import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Observable, Subscription } from 'rxjs';
import { Cupcake } from '../../models/cupcake.model';
import { AsyncPipe } from '@angular/common';
import { Accessory } from '../../models/accessory.model';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, AsyncPipe, FormsModule, RouterLink],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent implements OnInit, OnDestroy {
  apiService = inject(ApiService);
  selectedAccessory = "null"
  cupcakes: Cupcake[] = [];
  filteredCupcakes: Cupcake[] = []
  cupcakesSuscription!: Subscription;
  accessories$!: Observable<Accessory[]>;

  ngOnInit(): void {
    this.cupcakesSuscription = this.apiService.getCupcakes().subscribe((cupcakes) => {
      this.cupcakes = cupcakes
      this.filteredCupcakes = cupcakes;
    })
    this.accessories$ = this.apiService.getAccessories()
  }

  ngOnDestroy(): void {
    this.cupcakesSuscription.unsubscribe()
  }

  handleFilter() {
    if(this.selectedAccessory === "null") {
      this.filteredCupcakes = this.cupcakes
      return
    }
    this.filteredCupcakes = this.cupcakes.filter((cupcake) => cupcake.accessory_id === this.selectedAccessory)
  }
}
