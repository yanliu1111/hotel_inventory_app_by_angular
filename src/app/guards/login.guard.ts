import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated(): boolean {
    // Check if the user token exists in localStorage
    return !!localStorage.getItem('userToken');
  }
}

export const loginGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = !!localStorage.getItem('userToken');
  if (isAuthenticated) {
    return true;
  } else {
    const router = new Router();
    router.navigate(['/login']);
    return false;
  }
};