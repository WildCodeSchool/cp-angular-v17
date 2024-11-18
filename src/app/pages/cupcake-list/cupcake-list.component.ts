import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Accessory, Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent,FormsModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {

  cupcakes!:Cupcake[];
  accessories!:Accessory[];
  selectedAccessory:string="all";
  cupcakeSubscription!:Subscription;
  accessorySubscription!:Subscription;
  
  cupcakesAPI=inject(ApiService)

  ngOnInit(){
    this.cupcakeSubscription=this.cupcakesAPI.getCupCakes().subscribe(data=>{this.cupcakes=data});
    this.accessorySubscription=this.cupcakesAPI.getAccessories().subscribe(data=>{ this.accessories=data;})
}

  ngOnDestroy(){
  this.cupcakeSubscription.unsubscribe();
  this.accessorySubscription.unsubscribe();
  }

  filteredCupcakes(){
    if (this.selectedAccessory==="all"){
      return this.cupcakes
    } else {
    return this.cupcakes.filter(cupcake=>String(cupcake.accessory_id)===this.selectedAccessory)
  }
  }


}
