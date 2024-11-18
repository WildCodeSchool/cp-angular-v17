import { Component, inject } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Subject, takeUntil } from 'rxjs';
import { Cupcake } from '../../shared/cupcake.model';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css'
})
export class CupcakeDetailsComponent {
  private unsubscribe = new Subject<void>()
  route: ActivatedRoute = inject(ActivatedRoute)

  constructor(private apiService: ApiService) { }

  cupcake!: Cupcake

  selectedAccessoryId: string|number = ""

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.apiService.getCupcakeById(Number(params.get('id'))).pipe(takeUntil(this.unsubscribe)).subscribe(response => {
        this.cupcake = response
      })
    });


  }

  ngOnDestroy(){
    this.unsubscribe.next()
    this.unsubscribe.complete()
  }

}
