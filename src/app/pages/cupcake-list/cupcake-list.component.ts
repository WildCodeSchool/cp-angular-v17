import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Observable } from 'rxjs';
import { Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { AsyncPipe } from '@angular/common';
import { Accessory } from '../../models/accessory.model';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, AsyncPipe],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {

  cupcakes$!: Observable<Cupcake[]>;
  accessories$!: Observable<Accessory[]>;

  private apiService = inject(ApiService);

  ngOnInit() {
    
    // Step 1: get all cupcakes
    this.cupcakes$ = this.apiService.getCupcakes();

    // Step 3: get all accessories
    this.accessories$ = this.apiService.getAccessories();
  }

}
