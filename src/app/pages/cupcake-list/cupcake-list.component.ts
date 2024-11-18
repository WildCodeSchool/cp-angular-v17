import { Component, inject, OnInit } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, CommonModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent implements OnInit {
  // Step 1: get all cupcakes
  cupcakes: Cupcake[] = [];
  cupcakeService = inject(ApiService);
  cupcakeSubscription!: Subscription;

  ngOnInit() {
    this.cupcakeSubscription = this.cupcakeService.getAllCupcakes().subscribe({
      next: (cupcakes: Cupcake[]) => {
        this.cupcakes = cupcakes;
      },
      error: (error:any) => {
        console.error('Erreur: ', error);
      },
      complete: () => {
        console.log('Les cupcakes : ', this.cupcakes)
      }
    });
  }

  ngOnDestroy() {
    this.cupcakeSubscription.unsubscribe();
  }
  // Step 3: get all accessories

}
