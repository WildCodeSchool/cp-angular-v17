import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css'
})
export class CupcakeDetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  
  private apiService = inject (ActivatedRoute);

  cupcakeId!: string;

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.cupcakeId = String(params.get('id'));
    });
  }


  }
