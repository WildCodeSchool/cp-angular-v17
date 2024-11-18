import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { CupcakesList } from '../../models/cupcake.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent implements OnInit, OnDestroy {
  // Step 1: get all cupcakes
  public readonly cupcakesService = inject(ApiService);
  public  cupcakes! : CupcakesList;
  private subscription! : Subscription

  // Step 3: get all accessories


  ngOnInit(): void {
    this.subscription = this.cupcakesService.getCupcakes().subscribe((cupcakes) => {
      this.cupcakes = cupcakes;
      console.log("list de cupcakes", this.cupcakes);
      
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
