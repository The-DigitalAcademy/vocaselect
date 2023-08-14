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
  resetPasswordForm: FormGroup;
  token: string;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private authService: AuthService) {
    this.token = this.route.snapshot.queryParams.token || '';

    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const password = this.resetPasswordForm.value.password;
      this.authService.resetPassword(this.token, password).subscribe(
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

