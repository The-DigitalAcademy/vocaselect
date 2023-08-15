import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  showResetPasswordForm = false;
  resetPasswordForm: FormGroup;
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.resetPasswordForm = this.formBuilder.group({
      resetOTP: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }
   ngOnInit(): void {}

 

  onResetPasswordSubmit() {
    const otp = this.resetPasswordForm.get('resetOTP')?.value;
    const newPassword = this.resetPasswordForm.get('newPassword')?.value;
    // You can also include user's email or additional info in this method
    this.authService.resetPasswordWithOTP(otp, newPassword).subscribe(
      () => {
        // Password reset successfully, show a message or redirect
      },
      (error) => {
        // Handle error, e.g., show error message
      }
    );
   }
}