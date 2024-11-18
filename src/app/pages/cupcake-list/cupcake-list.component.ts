import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Observable } from 'rxjs';
import { Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, AsyncPipe],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes

  cupcakes$!: Observable<Cupcake[]>;

  private apiService = inject(ApiService);

  ngOnInit() {
    this.cupcakes$ = this.apiService.getCupcakes();
  }

  // Step 3: get all accessories

}
