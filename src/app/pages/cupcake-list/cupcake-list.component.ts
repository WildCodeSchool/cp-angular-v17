import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { map, Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Accessory } from '../../models/accessory.model';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent,CommonModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {

  private apiService = inject(ApiService);
  cupcakeSubscription!: Subscription;

  accessories$!: Observable<Accessory[]>;

  cupcakes: Cupcake[] = [];
  cupcakesSelected: Cupcake[] = [];
  
  ngOnInit(){
    this.apiService.getCupcakes().subscribe(data => {
      this.cupcakes = data;
      this.cupcakesSelected = this.cupcakes;
    });
    this.accessories$ = this.apiService.getAccessories();
  }

  ngOnDestroy(){
    this.cupcakeSubscription.unsubscribe();
  }


  selectAccessory(event: Event){
    
    const select = event.target  as HTMLSelectElement;
    console.log(select.value);

    this.cupcakesSelected = this.cupcakes.filter(cupcake =>cupcake.accessory_id === select.value)

    if(select.value === ""){
      this.cupcakesSelected = this.cupcakes
    }
    
  }

}
