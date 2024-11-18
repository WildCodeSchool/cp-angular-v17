import { Component } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { inject } from '@angular/core';
import { Cupcake } from '../../models/cupcake.model';
import { Accessory } from '../../models/accessory.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent,CommonModule,FormsModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  accessoryFilter = "";
  cupcakeService = inject(ApiService);
  cupcakes:Cupcake[] = [];
  accessories:Accessory[] = [];
  ngOnInit(){
    this.cupcakeService.getAccessories().subscribe((response)=>{
      this.accessories=response;
      console.log(this.accessories);
    })
    this.cupcakeService.getCupCakes().subscribe((response)=>{this.cupcakes=response;
      console.log(this.cupcakes);
    }
  ) 
  }

  cupcakesfilter(){
    console.log(this.accessoryFilter);
  }
  
 

}
