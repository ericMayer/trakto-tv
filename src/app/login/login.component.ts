import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '@shared/services/auth.service';
import { openSnackBarAlert } from '@shared/utils/alert.utils';
import { UserInfo } from '@shared/interfaces/user-info.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formUserCredentials: FormGroup;
  public isLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
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

  public signIn(): void {
    if (this.formUserCredentials.valid && !this.isLoading) {
      this.isLoading = true;
      this.authService.signIn(this.formUserCredentials.value)
        .subscribe({
          next: (userInfo: UserInfo) => {
            // TODO: armazenar para usar quando necessário e redirecionar para menu
            console.log(userInfo);
            this.isLoading = false;
          },
          error: () => {
            openSnackBarAlert(this.snackBar, {
              message: 'Não foi possível verificar se a url da sua loja está disponível, por favor tente novamente.'
            });
            this.isLoading = false;
          }
        });
    }
  }
}
