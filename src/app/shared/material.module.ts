import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
