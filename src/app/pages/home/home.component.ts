import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CupcakeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
