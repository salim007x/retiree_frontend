import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('retiree_token');
    if (isLoggedIn) {
      this.router.navigate(['/home']); // Redirect to home if logged in
      return false; // Prevent access to the login route
    }
    return true; // Allow access to the route
  }
}
