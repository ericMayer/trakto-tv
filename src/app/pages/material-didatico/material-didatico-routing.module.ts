import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialDidaticoComponent } from './material-didatico.component';
import { ListMaterialDidaticoComponent } from './list-material-didatico/list-material-didatico.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialDidaticoComponent
  },
  {
    path: 'lista',
    component: ListMaterialDidaticoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialDidaticoRoutingModule { }
