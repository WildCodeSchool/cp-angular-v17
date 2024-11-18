import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcakes } from '../../models/cupcake.model';
import { Accessories } from '../../models/accessories.model';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
    // Create attributs in order to get datas
    public cupcakes: Cupcakes[] = [];
    public accessories: Accessories[] =[];


  // Inject ApiService
  private apiService : ApiService = inject(ApiService);

  // Get Cupcakes and accessories on init
  ngOnInit(): void {
    // Step 1: get all cupcakes
    this.apiService.getCupcakes().subscribe(cupcake =>{
      console.log(cupcake)
      this.cupcakes = cupcake;
    })

    // Step 3: get all accessories
    this.apiService.getAccessories().subscribe(accessory =>{
      console.log(accessory);
      this.accessories = accessory;
    })

  }



}
