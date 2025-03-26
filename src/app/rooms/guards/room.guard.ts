import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoomAuthService {
  getUserRole(): string | null {
    // Retrieve the user's role from localStorage
    return localStorage.getItem('userRole');
  }
}

export const roomGuard: CanActivateFn = (route, state) => {
  const roomAuthService = new RoomAuthService();
  const router = new Router();

  const userRole = roomAuthService.getUserRole();

  if (userRole === 'admin' || userRole === 'regular') {
    return true; // Allow access for both admin and regular users
  } else {
    alert('Access denied. Please log in.');
    router.navigate(['/login']); // Redirect to login if no valid role
    return false;
  }
};