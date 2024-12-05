import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastService } from '../../shared/services/toast.service';
import { AuthLayoutComponent } from "../../shared/components/auth-layout/auth-layout.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, HttpClientModule, AuthLayoutComponent, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  currentYear: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.registerForm = this.fb.group(
      {
        rsaPin: ['', [Validators.required, this.rsaPinValidator]],
        surname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit() : void {
    this.currentYear = new Date().getFullYear();
  }


   // Custom validator to check if RSA Pin is a 12-digit number
   rsaPinValidator(control: any) {
    const value = control.value;
    const valid = /^[0-9]{12}$/.test(value); // Check if value is a 12-digit number
    return valid ? null : { invalidRsaPin: true }; // Return error if invalid
  }
  

  // Custom validator to check if password and confirmPassword match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Form submission logic
  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;

      // here ... encode the passwords using btoa()
    formData.password = btoa(formData.password);
    formData.confirmPassword = btoa(formData.confirmPassword);

      this.authService.signup(formData).subscribe({
        next: (response: any) => {
          if(response.responseCode === 200 ) {
            this.toastService.showToast(response.message);
            this.router.navigate(['/login']); // go to login when successful
          } else {
            this.toastService.showToast(response.message);
          }
        },
        error: (error: any) => {
          this.toastService.showToast(error.error.message || 'Failed, please check internet connection');
          console.log(error);
        },
      });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
