import { Component, OnInit, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent implements OnInit {
  ApiService = inject(ApiService);
  router = inject(Router);

  cupcakes = this.ApiService.cupcakes;
  accessories = this.ApiService.accessories;

  ngOnInit(): void {
    this.ApiService.fetchCupcakes();
    this.ApiService.fetchAccessories();
  }

  onAccessoryChange(accessoryId: string) {
    this.ApiService.setAccessory(accessoryId);
  }

  goToCupcake(cupcakeId: string) {
    this.router.navigate(['/cupcake', cupcakeId]);
  }
}
