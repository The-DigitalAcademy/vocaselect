import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-request-password-reset',
  templateUrl: './request-password-reset.component.html',
  styleUrls: ['./request-password-reset.component.scss']
})
export class RequestPasswordResetComponent implements OnInit {


    forgotPasswordForm: FormGroup;
  
    constructor(private fb: FormBuilder, private authService: AuthService) {
      this.forgotPasswordForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      });
    }
  
    ngOnInit(): void {}
  
    onSubmit() {
      if (this.forgotPasswordForm.valid) {
        const email = this.forgotPasswordForm.value.email;
        this.authService.requestPasswordReset(email).subscribe(
          () => {
            // Handle success, show a message or redirect
          },
          (error) => {
            // Handle error
          }
        );
      }
    }
  }







