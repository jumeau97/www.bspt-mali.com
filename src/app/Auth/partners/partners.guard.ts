import { CanActivateFn } from '@angular/router';

export const partnersGuard: CanActivateFn = (route, state) => {
  return true;
};
