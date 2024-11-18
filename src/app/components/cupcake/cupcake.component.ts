import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cupcake } from '../../models/cupcake.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cupcake',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cupcake.component.html',
  styleUrl: './cupcake.component.css'
})
export class CupcakeComponent {
  @Input() cupcake! : Cupcake;

}
