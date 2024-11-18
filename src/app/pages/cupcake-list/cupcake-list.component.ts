import { Component } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { inject } from '@angular/core';
import { Cupcake } from '../../models/cupcake.model';
import { Accessory } from '../../models/accessory.model';


@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  cupcakeService=inject(ApiService)
  cupcakes:Cupcake[]=[]
  accessories:Accessory[]=[]
  ngOnInit(){
    this.cupcakeService.getAccessories().subscribe((response)=>{
      this.accessories=response
      console.log(this.accessories)
    })
    this.cupcakeService.getCupCakes().subscribe((response)=>{this.cupcakes=response
      console.log(this.cupcakes)
    }
    
    
  )
    
  }
  // Step 3: get all accessories

}
