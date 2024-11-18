import { CommonModule } from '@angular/common';
import {Component, Input} from '@angular/core';
import {Cupcake} from "../../models/cupcake.model";

@Component({
  selector: 'app-cupcake',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cupcake.component.html',
  styleUrl: './cupcake.component.css'
})
export class CupcakeComponent {
  @Input() TheCupcake!: Cupcake;

}
