import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CupcakeListComponent } from './pages/cupcake-list/cupcake-list.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { CupcakeDetailsComponent } from './pages/cupcake-details/cupcake-details.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cupcake/:id",
    component: CupcakeDetailsComponent
  },
  {
    path: "cupcakes",
    component: CupcakeListComponent
  },
  {
    path: "instructions",
    component: InstructionsComponent
  },
];
