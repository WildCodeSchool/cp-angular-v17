import { Component, inject } from '@angular/core';
import { CupcakeComponent } from "../../components/cupcake/cupcake.component";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [CupcakeComponent, CommonModule],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css'
})
export class CupcakeDetailsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private apiService: ApiService = inject(ApiService);

  public cupcakeId!: number;
  public cupcake$!: Observable<Cupcake>;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cupcakeId = Number(params.get('id'));
    });
    this.cupcake$ = this.apiService.getCupcakeById(this.cupcakeId);
  }
}
