import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { InterceptorModule } from './interceptor/interceptor.module';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [
    InterceptorModule,
    ToolbarComponent
  ]
})
export class CoreModule { }
