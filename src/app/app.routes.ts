import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CupcakeListComponent } from './pages/cupcake-list/cupcake-list.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { SingleCupcakeComponent } from './pages/single-cupcake/single-cupcake.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cupcakes",
    component: CupcakeListComponent
  },
  {
    path: "cupcake/:id",
    component: SingleCupcakeComponent
  },
  {
    path: "instructions",
    component: InstructionsComponent
  },
];
