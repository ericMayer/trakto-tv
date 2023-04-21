import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SnackBarAlertModule } from '@shared/components/snack-bar-alert/snack-bar-alert.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    SnackBarAlertModule
  ]
})
export class LoginModule { }
