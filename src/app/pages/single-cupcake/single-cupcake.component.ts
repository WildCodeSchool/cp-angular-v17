import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Cupcake } from '../../models/cupcake.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-cupcake',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './single-cupcake.component.html',
  styleUrl: './single-cupcake.component.css'
})
export class SingleCupcakeComponent {

  private route: ActivatedRoute = inject(ActivatedRoute);
  private api : ApiService = inject(ApiService);
	
  cupcake! : Cupcake;
  cupcakeId! : string | number;
  cupcakeSubscription! : Subscription;

	ngOnInit() : void {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.cupcakeId = Number(params.get('id'));
      this.cupcakeSubscription = this.api.fetchCupcakeById(this.cupcakeId).subscribe({
        next: response => this.cupcake = response,
        error: error => console.log(error)
      })
		});
  }

  ngOnDestroy() : void {
    this.cupcakeSubscription.unsubscribe();
  }
}
