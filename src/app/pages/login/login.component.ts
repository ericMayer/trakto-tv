import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthService } from '@shared/services/auth.service';
import { openSnackBarAlert } from '@shared/utils/alert.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formUserCredentials: FormGroup;
  public isLoading: boolean;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.createFormUserCredentials();
  }

  private createFormUserCredentials(): void {
    this.formUserCredentials = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public addClassDisabled(): boolean {
    return this.formUserCredentials.invalid || this.isLoading;
  }

  public signIn(): void {
    if (this.formUserCredentials.valid && !this.isLoading) {
      this.isLoading = true;
      this.authService.signIn(this.formUserCredentials.value)
        .subscribe({
          next: () => {
            this.router.navigateByUrl('menu');
            this.isLoading = false;
          },
          error: () => {
            openSnackBarAlert(this.snackBar, {
              message: 'Verifique seu login.'
            });
            this.isLoading = false;
          }
        });
    }
  }
}
