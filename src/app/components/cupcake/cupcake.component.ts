import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Accessory, Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cupcake',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cupcake.component.html',
  styleUrl: './cupcake.component.css'
})
export class CupcakeComponent {
  @Input() cupcake!:Cupcake;


}
