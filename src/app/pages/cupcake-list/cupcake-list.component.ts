import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { Accessory } from '../../models/accessories.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, FormsModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {

    // Create attributs in order to get datas
    public cupcakes: Cupcake[] = [];
    public accessories: Accessory[] =[];
    public selectedAccessory: string = '';
    public filteredCupcakes : Cupcake[] =[];


  // Inject ApiService
  private apiService : ApiService = inject(ApiService);

  // Get Cupcakes and accessories on init
  ngOnInit(): void {
    // Step 1: get all cupcakes
    this.apiService.getCupcakes().subscribe(cupcake =>{
      this.cupcakes = cupcake;
      this.filteredCupcakes = this.cupcakes;
    })

    // Step 3: get all accessories
    this.apiService.getAccessories().subscribe(accessory =>{
      this.accessories = accessory;
    })    
  }

  // Step 5 : Filter the list by accessory
  filterCupcakesByAccessory(event: Event) {
    const filterResult = event.target as HTMLInputElement;

    // if no filter applied, return the whole list
    if (filterResult.value === ''){
        this.filteredCupcakes = this.cupcakes;
    // Else return the filtered list
    } else {
        this.filteredCupcakes = this.cupcakes.filter(cupcake =>{
          return cupcake.accessory_id === filterResult.value
      })
    }
  }
}
