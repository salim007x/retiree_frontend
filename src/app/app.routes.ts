import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home', // Redirect to home by default
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./features/sign-up/sign-up.component').then((c) => c.SignUpComponent),
    canActivate: [AuthGuard], // Applying guard to prevent logged on users from accessing sign up page
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((c) => c.LoginComponent),
    canActivate: [AuthGuard], // Applying guard to prevent logged on users from accessing login page
  },
];
