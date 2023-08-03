import { CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot ,UrlTree  } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  
  return true;
};
