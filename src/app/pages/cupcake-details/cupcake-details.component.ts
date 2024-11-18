import { Component, inject } from '@angular/core';
import { Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css'
})
export class CupcakeDetailsComponent {
  cupcakeId!:number;
  cupcake!:Cupcake;
  cupcakeSubscription!:Subscription;

  cupcakeAPI=inject(ApiService)
  route=inject(ActivatedRoute)

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => { 
      this.cupcakeId = Number(params.get('id')); 
      this.cupcakeSubscription = this.cupcakeAPI.getCupcakeById(this.cupcakeId).subscribe(data=>{this.cupcake=data}) 
  });
  }

  ngOnDestroy(){
    this.cupcakeSubscription.unsubscribe();
  }

}
