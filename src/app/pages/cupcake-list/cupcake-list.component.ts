import { Component, inject } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { HttpClient } from '@angular/common/http';
import { Cupcake } from '../../models/cupcake.model';
import { ApiService } from '../../shared/api.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Accessory } from '../../models/accessory.model';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-cupcake-list',
    standalone: true,
    imports: [CupcakeComponent, FormsModule],
    templateUrl: './cupcake-list.component.html',
    styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {
    http: HttpClient = inject(HttpClient);
    services = inject(ApiService);

    cakes: Cupcake[] = [];

    cupcakes: Cupcake[] = [];

    accessories: Accessory[] = [];
    choosenAccessory: string = '';

    // Step 1: get all cupcakes

    ngOnInit() {
        this.services.getCupcakes().subscribe((data) => {
            this.cakes = data;
            this.cupcakes = this.cakes;
        });
        this.services.getCupcakesAccessories().subscribe((data) => {
            this.accessories = data;
        });
    }

    getCupcakesoutOfAccessory() {
        this.cupcakes = this.cakes.filter(
            (cake) => cake.accessory_id === this.choosenAccessory
        );

        if (this.choosenAccessory == '') {
            this.cupcakes = this.cakes;
        }
    }
}
