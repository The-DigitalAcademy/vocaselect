import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.scss']
})
export class RequestPasswordResetComponent implements OnInit {
  showRequestPasswordForm = true;
  requestPasswordForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.requestPasswordForm = this.formBuilder.group({
      requestEmail: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  onRequestPasswordSubmit() {
    const email = this.requestPasswordForm.get('requestEmail')?.value;
    const link = window.location.origin + '/passwordReset/' + btoa(email);
    this.authService.sendPasswordResetOTP(email, link).subscribe(
      () => {
        // OTP sent successfully, show a message or redirect
      },
      (error) => {
        // Handle error, e.g., show error message
      }
    );
  }
}