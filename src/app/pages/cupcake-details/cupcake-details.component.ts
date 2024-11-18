import { Component, inject, Input, OnInit } from '@angular/core';
import { Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css',
})
export class CupcakeDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  cupcake$!: Observable<Cupcake>;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id')!;
      this.cupcake$ = this.apiService.getCupcakeById(id);
    });
  }
}
