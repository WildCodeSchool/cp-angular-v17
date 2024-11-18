import {Component, inject} from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import {Cupcake} from "../../models/cupcake.model";
import {ApiService} from "../../shared/api.service";
import {Observable} from "rxjs";
import {AsyncPipe, CommonModule} from "@angular/common";

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, AsyncPipe, CommonModule],
  templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
  // Step 1: get all cupcakes
  cupcakes$!: Observable<Cupcake[]>;

  private apiService: ApiService = inject(ApiService);

  ngOnInit() {
    this.cupcakes$ = this.getAllCupcakes();
    console.log(this.cupcakes$);
  }

  getAllCupcakes() : Observable<Cupcake[]> {
   return this.apiService.getCupcakes()
  }

  // Step 3: get all accessories

}
