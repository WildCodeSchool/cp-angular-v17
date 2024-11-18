import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { ParamMap } from '@angular/router';
import { Cupcake } from '../../models/cupcake.model';

@Component({
  selector: 'app-onecupcake',
  standalone: true,
  imports: [],
  templateUrl: './onecupcake.component.html',
  styleUrl: './onecupcake.component.css',
})
export class OnecupcakeComponent {
  private apiService = inject(ApiService);
  route: ActivatedRoute = inject(ActivatedRoute);
  cupcakeId!: number;
  cupcake!: Cupcake;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cupcakeId = Number(params.get('cupcakeID'));
      console.log(this.cupcakeId);
    });

    this.apiService
      .getoneCupcake(this.cupcakeId)
      .subscribe((data) => (this.cupcake = data));

    console.log(this.cupcake);
  }
}
