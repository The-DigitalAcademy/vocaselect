import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {
    // Initialize any properties you need for the registration form
    name: '',
    surname: '',
    email: '',
    dob: '',
    city: '',
    studentgrade: '',
    password: '',

  };
isSignUpFailed: any;
errorMessage: any;

  constructor(private userService: UserService, private router: Router) {}

  signup() {
    this.userService.signup(this.form).subscribe(
      (response) => {
        // Handle successful registration response if needed
        console.log('Registration successful:', response);

        // Show success alert using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'You have been successfully registered.',
        });
        
      },
      (error) => {
        // Handle registration error if needed
        console.error('Registration error:', error);
      }
    );
  }

  ngOnInit(): void {
  }

  
}



