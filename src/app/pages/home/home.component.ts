import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { HttpClient } from '@angular/common/http';
import { Cupcake } from '../../models/cupcake.model';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, CupcakeComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {
    http: HttpClient = inject(HttpClient);
    cupcake!: Cupcake;

    ngOnInit() {
        this.http
            .get<Cupcake>('http://localhost:4000/cupcakes/1')
            .subscribe((response) => {
                this.cupcake = response;
            });
    }
}
