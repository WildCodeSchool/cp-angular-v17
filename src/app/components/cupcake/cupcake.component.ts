import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cupcake',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cupcake.component.html',
  styleUrl: './cupcake.component.css'
})
export class CupcakeComponent {
  @Input() cupcake: any = {
    url: 'http://images.innoveduc.fr/php_parcours/cp2/donut.png',
    color1: 'var(--default-cream-color)',
    color2: 'var(--default-cream-color)',
    color3: 'var(--default-cream-color)',
    name: '',
  };

}
