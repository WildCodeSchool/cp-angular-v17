import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { Subscription } from 'rxjs';
import { Cupcake } from '../../models/cupcake.model';
import { CupcakeComponent } from "../../components/cupcake/cupcake.component";

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css',
})
export class CupcakeDetailsComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly cupCakesService = inject(ApiService);
  private cupcakeId: number = Number(this.route.snapshot.paramMap.get('id'));
  public cupcake!: Cupcake;
  public isLoading: boolean = true;
  public hasError: boolean = false;
  public errorMessage: string = '';
  private subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = this.cupCakesService
      .getCupcakeById(this.cupcakeId)
      .subscribe({
        next: (cupcake) => {
          this.cupcake = cupcake;
          this.isLoading = false;
        },
        error: () => {
          this.hasError = true;
          this.errorMessage = 'une erreur est survenue';
          this.isLoading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
