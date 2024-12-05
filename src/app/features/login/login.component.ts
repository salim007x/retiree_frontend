import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastService } from '../../shared/services/toast.service';
import { AuthLayoutComponent } from '../../shared/components/auth-layout/auth-layout.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    AuthLayoutComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword: boolean = false;
  currentYear: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

  // password toggle visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Form submission logic
  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      // here ... encode the password using btoa()
      formData.password = btoa(formData.password);

      this.authService.login(formData).subscribe({
        next: (response: any) => {
          if (response.responseCode === 200) {
            // Save both surname and access_token to local storage
            localStorage.setItem('retiree_token', response.access_token);
            localStorage.setItem('surname', response.surname);
            this.router.navigate(['/home']); // go to home when successful
          } else {
            this.toastService.showToast(response.message);
          }
        },
        error: (error: any) => {
          this.toastService.showToast(
            error.error.message || 'Failed, please check internet connection'
          );
          console.log(error);
        },
      });
    }
  }
}
