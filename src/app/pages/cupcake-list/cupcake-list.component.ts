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

  // Step 1: get all cupcakes
  ngOnInit(): void {
    this.ApiService.fetchCupcakes();
    console.log(this.ApiService.cupcakes());
  }

  // Step 3: get all accessories
}
