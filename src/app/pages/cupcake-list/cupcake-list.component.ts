import { Component, OnInit, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent implements OnInit {
  ApiService = inject(ApiService);

  ngOnInit(): void {
    this.ApiService.fetchCupcakes();
    this.ApiService.fetchAccessories();
  }
}
