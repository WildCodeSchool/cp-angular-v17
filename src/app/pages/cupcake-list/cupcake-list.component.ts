import { Component, inject, Input } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/api.service';
import { HttpClient } from '@angular/common/http';
import { Cupcakes } from '../../models/cupcake.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, CommonModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  cupcakes$!: Observable<Cupcakes[]>;

  private apiService = inject(ApiService);

  http = inject(HttpClient);

  ngOnInit() {
    this.cupcakes$ = this.apiService.getCupcakes();
  }

  // Step 3: get all accessories
}
