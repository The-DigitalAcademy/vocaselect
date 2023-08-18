import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  email:any;
  constructor(private authService: AuthService, private formBuilder: FormBuilder,public router: Router,private activatedRoute: ActivatedRoute) {
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
    //creating an object for changing password

    const data = {
      email: this.email,
      otp: this.resetPasswordForm.get('otp')?.value,
      password: this.resetPasswordForm.get('password')?.value
    }
    
    this.authService.resetPasswordWithOTP(data).subscribe(
      () => {
        // Password reset successfully, show a message or redirect
        this.router.navigate(['/login']);
      },
      (error) => {

        console.log(error);
        // Handle error, e.g., show error message
      }
    );
   }
}