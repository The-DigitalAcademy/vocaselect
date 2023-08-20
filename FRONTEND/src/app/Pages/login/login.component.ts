import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Login Component Calls TokenStorageService Methods To Check The LoggedIn Status And Save Token And User Info To Session Storage.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading: boolean = false; 
  successMessage: string | null = null; // Initialize success message
  users!: any;
  email!: string;
  invalidCredentials = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, public router: Router, private formB: FormBuilder,) {
    this.loginForm = this.formB.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.tokenStorage.signOut();
    this.invalidCredentials = false;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true; // Activate loading state
      this.authService.login(this.loginForm.value).subscribe({
        next: data => {
          this.tokenStorage.saveToken(data.token);
          console.log(data);
          this.tokenStorage.saveUser(data.user);
          console.log(data)
          this.router.navigate(['/home']);
          this.loading = false; // Deactivate loading state
           this.successMessage = 'Successfully logged in!'; // Set success message
          setTimeout(() => {
            this.successMessage = null; // Clear success message after 2 seconds
          }, 4000);
        },
        error: err => {
          console.log(err)
          if (err?.status == 401) {
            this.errorMessage = "Incorrect username or password provided!";
          } else {
            this.errorMessage = err.error.message;
          }
          this.loading = false; // Deactivate loading state

          // this.toastr.error("Login Failed, Try Again")
        },

      });
    } else {
      this.invalidCredentials = true;
      console.log("Wrong credentials");
    }

  }

}
