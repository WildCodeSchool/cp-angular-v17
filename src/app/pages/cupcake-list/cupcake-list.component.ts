import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcakes } from '../../models/cupcake.model';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  // Array of cupcakes
  public cupcakes: Cupcakes[] = [];

  // Inject ApiService
  private apiService : ApiService = inject(ApiService);

  ngOnInit(): void {
    this.apiService.getCupcakes().subscribe(response =>{
      console.log(response)
      this.cupcakes = response
    })
  }

  // Step 3: get all accessories

}
