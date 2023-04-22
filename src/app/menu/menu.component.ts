import { Component } from '@angular/core';

import { Menu } from './shared/interfaces/menu.interface';
import { menu } from './shared/utils/menu.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public menu: Menu[] = menu;

  // constructor(private router: Router) { }

  // public openModulo(modulo: Menu): void {
  //   if (modulo?.router) {
  //     // TODO: fazer o redirect aqui para rota do material didático
  //   }
  // }
}
