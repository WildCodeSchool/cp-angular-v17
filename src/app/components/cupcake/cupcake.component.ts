import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Cupcake } from '../../shared/cupcake.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cupcake',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cupcake.component.html',
  styleUrl: './cupcake.component.css'
})
export class CupcakeComponent {
  // cupcake: any = {
  //   url: 'http://images.innoveduc.fr/php_parcours/cp2/donut.png',
  //   color1: 'var(--default-cream-color)',
  //   color2: 'var(--default-cream-color)',
  //   color3: 'var(--default-cream-color)',
  //   name: '',
  // };

  constructor(private router: Router){}
  
  @Input() cupcake!: Cupcake;

  seeDetails(){
    this.router.navigate(['/cupcakes/', this.cupcake.id])
  }
}
