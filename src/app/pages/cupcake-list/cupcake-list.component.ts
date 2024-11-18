import { Component, inject, Input } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { HttpClient } from '@angular/common/http';
import { Cupcakes } from '../../models/cupcake.model';
import { CommonModule } from '@angular/common';
import { Accessories } from '../../models/accessories.model';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, CommonModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  cupcakes$!: Observable<Cupcakes[]>;
  accessories$!: Observable<Accessories[]>;

  private apiService = inject(ApiService);

  http = inject(HttpClient);

  ngOnInit() {
    this.apiService.getCupcakes().subscribe((cupcakes) => {
      console.log(cupcakes);
      this.cupcakes$ = this.apiService.getCupcakes();
    });

    this.apiService.getAccessories().subscribe((accessories) => {
      console.log(accessories);
      this.accessories$ = this.apiService.getAccessories();
    });
  }

  // Step 3: get all  accessories
}
