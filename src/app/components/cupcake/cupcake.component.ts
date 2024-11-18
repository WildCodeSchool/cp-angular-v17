import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cupcake } from '../../models/cupcake.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cupcake',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cupcake.component.html',
  styleUrl: './cupcake.component.css',
})
export class CupcakeComponent {
  @Input() cupcake!: Cupcake;
}
