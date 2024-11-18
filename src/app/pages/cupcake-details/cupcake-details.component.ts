import { Component, Input } from '@angular/core';
import { Cupcakes } from '../../models/cupcake.model';

@Component({
  selector: 'app-cupcake-details',
  standalone: true,
  imports: [],
  templateUrl: './cupcake-details.component.html',
  styleUrl: './cupcake-details.component.css',
})
export class CupcakeDetailsComponent {
  @Input() cupcake!: Cupcakes;
}
