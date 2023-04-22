import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '@shared/interfaces/user-info.interface';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  public user: UserInfo;
  public currentDate: Date = new Date();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.getUser();
  }

  private getUser(): void {
    this.user = this.authService.user;
    if (!this.user)
      this.router.navigateByUrl('login');
  }
}
