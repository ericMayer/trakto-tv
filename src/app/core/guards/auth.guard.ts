import { CanActivateFn } from "@angular/router";
import { inject } from '@angular/core';

import { AuthService } from "@shared/services/auth.service";

export const canActivate: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);

  if (authService.user) return true;

  authService.logout();
  return false;
};
