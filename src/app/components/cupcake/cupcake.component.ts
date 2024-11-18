import { Component, Input } from '@angular/core';
import { Cupcake } from '../../models/cupcake.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cupcake',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cupcake.component.html',
  styleUrl: './cupcake.component.css',
})
export class CupcakeComponent {
  @Input() cupcake!: Cupcake;
}
