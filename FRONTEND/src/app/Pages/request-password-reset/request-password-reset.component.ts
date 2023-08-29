import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.scss']
})
export class RequestPasswordResetComponent implements OnInit {
  showRequestPasswordForm = true;
  requestPasswordForm: FormGroup;

  result: boolean = false; // Set to true if OTP is successfully sent, otherwise false
  isFailed: boolean = false; // Set to true if OTP sending fails, otherwise false


  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.requestPasswordForm = this.formBuilder.group({
      requestEmail: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}


  onRequestPasswordSubmit() {
    if (this.requestPasswordForm.invalid) {
      this.isFailed = true; // Set isFailed to true to show the alert message
      return;
    }
  
    this.isFailed = false; // Reset isFailed if the form is valid

    const email = this.requestPasswordForm.get('requestEmail')?.value;
    //generate link for password reset using and encrypting parameter email using btoa
    const link = window.location.origin + '/passwordReset/' + btoa(email);
    this.authService.sendPasswordResetOTP(email, link).subscribe(
      () => {
        this.result = true; 
        // OTP sent successfully, show a message or redirect
      },
      (error) => {
        // Handle error, e.g., show error message
        this.isFailed = true;
        console.log(error);
      }
    );
  }
}