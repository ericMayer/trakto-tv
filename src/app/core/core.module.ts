import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterceptorModule } from '@core/interceptor/interceptor.module';
import { ToolbarModule } from '@core/toolbar/toolbar.module';
import { DirectivesModule } from '@core/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    InterceptorModule,
    ToolbarModule,
    DirectivesModule
  ]
})
export class CoreModule { }
