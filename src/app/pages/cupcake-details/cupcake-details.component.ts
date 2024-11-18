import { ApiService } from './../../shared/api.service';
import { Component, inject } from '@angular/core';
import { CupcakeComponent } from "../../components/cupcake/cupcake.component";
import { ActivatedRoute, ActivationEnd, ParamMap } from '@angular/router';
import { Cupcake } from '../../models/cupcake.model';

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [CupcakeComponent],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css'
})
export class CupcakeDetailsComponent {
  private ApiService: ApiService = inject(ApiService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  private cupcakeId!: number;
  public cupcake!: Cupcake;
  public isDetailPage: boolean = true;

  ngOnInit(): void {
    // Get the cupcake Id from the url 
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cupcakeId = Number(params.get('id'));
    });
    this.ApiService.getCupcakeById(this.cupcakeId).subscribe(response=>{
      console.log(response);
      this.cupcake = response;
    })
    
  }

}
