import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { InterceptorModule } from './interceptor/interceptor.module';
import { ImageNotFoundDirective } from './directives/image-not-found.directive';

@NgModule({
  declarations: [
    ToolbarComponent,
    ImageNotFoundDirective
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [
    InterceptorModule,
    ToolbarComponent,
    ImageNotFoundDirective
  ]
})
export class CoreModule { }
