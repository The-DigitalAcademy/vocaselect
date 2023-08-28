import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  showResetPasswordForm = false;
  resetPasswordForm: UntypedFormGroup;
  email:any;
  resetSuccess: boolean = false;
  resetFailed: boolean = false;
  loading: boolean = false;

  constructor(private authService: AuthService, private formBuilder: UntypedFormBuilder, public router: Router, private activatedRoute: ActivatedRoute,) {
    this.resetPasswordForm = this.formBuilder.group({
      otp: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
   ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      // decrypting the email parameter using atob
      this.email = atob( params.get('email')?? "");
    });
   }

  onResetPasswordSubmit() {

    if (this.resetPasswordForm.invalid) {
      // Mark form controls as touched to trigger validation
      this.resetPasswordForm.markAllAsTouched();
      return;
    }
    //creating an object for changing password

    const data = {
      email: this.email,
      otp: this.resetPasswordForm.get('otp')?.value,
      password: this.resetPasswordForm.get('password')?.value
    }

    this.loading = true; 
    
    this.authService.resetPasswordWithOTP(data).subscribe(
      () => {
        this.resetSuccess = true;
        // Password reset successfully, show a message or redirect
        setTimeout(() => {
          this.loading = false; // Reset loading
          this.router.navigate(['/login']);
        }, 2000); // 3 seconds delay before redirection

      },
      (error) => {
        this.resetFailed = true;
        console.log(error);
        // Handle error, e.g., show error message
      }
    );
   }
}