import { Component, inject, Pipe } from '@angular/core';
import { CupcakeComponent } from '../../components/cupcake/cupcake.component';
import { ApiService } from '../../shared/api.service';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Cupcake } from '../../shared/cupcake.model';
import { AsyncPipe } from '@angular/common';
import { Accessory } from '../../shared/accessory.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cupcake-list',
  standalone: true,
  imports: [CupcakeComponent, AsyncPipe, FormsModule],
templateUrl: './cupcake-list.component.html',
  styleUrl: './cupcake-list.component.css',
})
export class CupcakeListComponent {

  private unsubscribe = new Subject<void>()

  constructor(private apiService: ApiService) { }

  cupcakes: Cupcake[] = []
  accessories: Accessory[] = []

  selectedAccessoryId: string|number = ""

  ngOnInit() {
    this.apiService.getCupcakes().pipe(takeUntil(this.unsubscribe)).subscribe(response => {
      this.cupcakes = response
    })
    this.apiService.getAccessories().pipe(takeUntil(this.unsubscribe)).subscribe(response => {
      this.accessories = response
    })
  }

  handleFilterCupcakes(){
    this.apiService.getCupcakes().pipe(takeUntil(this.unsubscribe)).subscribe(response => {
      if (this.selectedAccessoryId == "") {
        this.cupcakes = response
      } else {
        this.cupcakes = response.filter((item: Cupcake) => item.accessory_id == this.selectedAccessoryId)
      }
    })
  }

  ngOnDestroy(){
    this.unsubscribe.next()
    this.unsubscribe.complete()
  }

}
