import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDidaticoRoutingModule } from './material-didatico-routing.module';
import { MaterialDidaticoComponent } from './material-didatico.component';
import { SharedModule } from '@shared/shared.module';

import { register } from 'swiper/element/bundle';
import { CardDesignComponent } from './shared/components/card-design/card-design.component';
register();

@NgModule({
  declarations: [
    MaterialDidaticoComponent,
    CardDesignComponent
  ],
  imports: [
    CommonModule,
    MaterialDidaticoRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialDidaticoModule { }
