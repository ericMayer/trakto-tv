import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDidaticoRoutingModule } from './material-didatico-routing.module';
import { MaterialDidaticoComponent } from './material-didatico.component';
import { SharedModule } from '@shared/shared.module';

import { CardDesignComponent } from './shared/components/card-design/card-design.component';
import { ListMaterialDidaticoComponent } from './list-material-didatico/list-material-didatico.component';

import { register } from 'swiper/element/bundle';
register();

import { LottieModule } from 'ngx-lottie';

@NgModule({
  declarations: [
    MaterialDidaticoComponent,
    CardDesignComponent,
    ListMaterialDidaticoComponent
  ],
  imports: [
    CommonModule,
    MaterialDidaticoRoutingModule,
    SharedModule,
    LottieModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialDidaticoModule { }
