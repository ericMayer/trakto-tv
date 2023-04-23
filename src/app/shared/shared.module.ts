import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SnackBarAlertModule } from '@shared/components/snack-bar-alert/snack-bar-alert.module';
import { MaterialModule } from '@shared/material.module';


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
