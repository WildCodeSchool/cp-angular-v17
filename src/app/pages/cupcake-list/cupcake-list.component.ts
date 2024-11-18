import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Observable, Subscription } from 'rxjs';
import { Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { AsyncPipe } from '@angular/common';
import { Accessory } from '../../models/accessory.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, AsyncPipe],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {

  private apiService = inject(ApiService);
  private http = inject(HttpClient);

  cupcakes$!: Observable<Cupcake[]>;
  accessories$!: Observable<Accessory[]>;
  accessoriesId!: number;
  private cupcakeSubscription!: Subscription;

  ngOnInit() {
    
    // Step 1: get all cupcakes
    this.cupcakes$ = this.apiService.getCupcakes();

    // Step 3: get all accessories
    this.accessories$ = this.apiService.getAccessories();

    // Step 5: get all accessories Id
    this.cupcakes$
  }
}
