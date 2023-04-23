import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackBarAlertModule } from '@shared/components/snack-bar-alert/snack-bar-alert.module';
import { CoreModule } from '@core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  exports: [
    CommonModule,
    SnackBarAlertModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
