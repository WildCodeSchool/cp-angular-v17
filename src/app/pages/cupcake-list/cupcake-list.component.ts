import { Component, inject, Input, OnInit } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Accessories } from '../../models/accessories.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, CommonModule, FormsModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent implements OnInit {
  apiService = inject(ApiService);
  cupcakes$!: Observable<Cupcake[]>;
  accessories$!: Observable<Accessories[]>;
  selectedAccessoryId: string = '';
  filteredCupcakes$!: Observable<Cupcake[]>;
  // Step 1: get all cupcakes
  ngOnInit(): void {
    this.cupcakes$ = this.apiService.getCupcakes();
    // Step 3: get all accessories
    this.accessories$ = this.apiService.getAccessories();

    this.filteredCupcakes$ = this.cupcakes$.pipe(
      map((cupcakes) =>
        this.apiService.filterCupcakes(cupcakes, this.selectedAccessoryId)
      )
    );
  }

  onAccessoryChange(): void {
    this.filteredCupcakes$ = this.cupcakes$.pipe(
      map((cupcakes) =>
        this.apiService.filterCupcakes(cupcakes, this.selectedAccessoryId)
      )
    );
  }
}
