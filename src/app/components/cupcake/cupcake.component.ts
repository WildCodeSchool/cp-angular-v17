import { CommonModule } from '@angular/common';
import { Component, OnInit, input } from '@angular/core';
import { Cupcake } from '../../models/cupcake.model';

@Component({
  selector: 'app-cupcake',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cupcake.component.html',
  styleUrl: './cupcake.component.css',
})
export class CupcakeComponent implements OnInit {
  cupcake = input.required<Cupcake>();

  ngOnInit(): void {
    if (this.cupcake()?.id) {
      console.log('Cupcake init');
    } else {
      console.log('Cupcake not init');
    }
  }
}
