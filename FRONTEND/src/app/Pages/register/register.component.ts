import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
// import Swal from 'sweetalert2';

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
  isSuccessful: boolean | undefined;


  constructor(private userService: UserService, private router: Router) {}

  // signup() {
  //   this.userService.signup(this.form).subscribe(
  //     (response) => {
  //       // Handle successful registration response if needed
  //       console.log('Registration successful:', response);

  //       // Show success alert using SweetAlert
  //       // Swal.fire({
  //       //   icon: 'success',
  //       //   title: 'Registration Successful!',
  //       //   text: 'You have been successfully registered.',
  //       // });
        
  //     },
  //     (error) => {
  //       // Handle registration error if needed
  //       console.error('Registration error:', error);
  //     }
  //   );

   
  // }

  ngOnInit(): void {
  }

  //This code appears to be implementing an onSubmit method for a registration functionality in an Angular application. 
  //The purpose of this code is to handle the form submission when a user tries to register or sign up.
  onSubmit(): void {
    const { name, surname, email, dob, city, studentgrade } = this.form;

    this.userService.signup(this.form).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        
      }
    });
  }
}



