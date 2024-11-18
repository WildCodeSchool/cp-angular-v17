import { Component, inject } from '@angular/core';
import { CupcakeComponent } from "../../components/cupcake/cupcake.component";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cupcake } from '../../models/cupcake.model';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [CupcakeComponent, AsyncPipe],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css'
})
export class CupcakeDetailsComponent {

  cupcakeId!: number;
  cupcake!: Cupcake ;
  cupcakeSubscription! : Subscription;
  route = inject(ActivatedRoute);
  apiService! : ApiService;


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.cupcakeId = Number(params.get('id'));
        console.log(this.cupcakeId);
        this.cupcakeSubscription = this.apiService.getCupcakeById(this.cupcakeId).subscribe((data => {
          this.cupcake = data;
          })
        );
      });
    }

    ngOnDestroy() {
      this.cupcakeSubscription.unsubscribe();
    }

}
