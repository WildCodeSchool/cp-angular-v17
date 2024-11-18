import { Component, inject, Input, OnInit } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, CommonModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent implements OnInit {
  apiService = inject(ApiService);
  cupcakes$!: Observable<Cupcake[]>;
  // Step 1: get all cupcakes
  ngOnInit(): void {
    this.cupcakes$ = this.apiService.getCupcakes();
  }

  // Step 3: get all accessories
}
