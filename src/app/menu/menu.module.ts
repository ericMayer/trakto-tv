import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    CoreModule,
    MatDividerModule
  ]
})
export class MenuModule { }
