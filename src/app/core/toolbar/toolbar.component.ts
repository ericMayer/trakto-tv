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

  @Input() public darkMode: boolean = true;

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
  }

  public getImageToolbar(image: string, isImage?: boolean): string {
    image = this.darkMode ? `${image}.svg` : `${image}-black.svg`;
    return isImage ? `assets/images/${image}` : `assets/icons/${image}`;
  }

  public goToMenu(): void {
    this.router.navigateByUrl('menu');
  }

  public logout(): void {
    this.authService.logout();
  }
}
