import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

export const bookingGuard = (
  component: BookingComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const snackBar = inject(MatSnackBar);

  if (component.bookingForm.pristine) {
    return true;
  } else {
    snackBar.open('You have unsaved changes. Are you sure you want to leave?', 'Close', {
      duration: 3000,
    });
    return confirm('You have unsaved changes. Do you really want to leave?');
  }
};