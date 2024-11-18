import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CupcakeListComponent } from './pages/cupcake-list/cupcake-list.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';
import { CupcakePageComponent } from './pages/cupcake-page/cupcake-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cupcakes',
    component: CupcakeListComponent,
  },
  {
    path: 'instructions',
    component: InstructionsComponent,
  },
  { path: 'cupcake/:id', component: CupcakePageComponent },
];
