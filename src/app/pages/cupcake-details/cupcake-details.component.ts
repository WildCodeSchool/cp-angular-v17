import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css',
})
export class CupcakeDetailsComponent implements OnInit {
  apiService = inject(ApiService);
  currentRoute = inject(ActivatedRoute)
  cupcake: Cupcake | null = null

  ngOnInit(): void {
    this.currentRoute.paramMap.subscribe((params) => {
      const cupcakeId = params.get('id');
      if(!cupcakeId) return;
      this.apiService.getCupcake(cupcakeId).subscribe((cupcake) => {
        this.cupcake = cupcake
      })
    })
  }
}
