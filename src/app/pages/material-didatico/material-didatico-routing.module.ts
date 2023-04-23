import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialDidaticoComponent } from './material-didatico.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialDidaticoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialDidaticoRoutingModule { }
