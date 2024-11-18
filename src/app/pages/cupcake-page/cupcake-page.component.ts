import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-cupcake-page',
  standalone: true,
  imports: [],
  templateUrl: './cupcake-page.component.html',
  styleUrl: './cupcake-page.component.css',
})
export class CupcakePageComponent implements OnInit {
  ApiService = inject(ApiService);
  route: ActivatedRoute = inject(ActivatedRoute);
  cupcakeId!: string | null;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cupcakeId = params.get('id');
    });

    if (this.cupcakeId !== null) {
      this.ApiService.fetchCupcakeById(this.cupcakeId);
    }
  }
}
