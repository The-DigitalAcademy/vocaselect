import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: any = {
    // Initialize any properties you need for the registration form
    name: '',
    surname: '',
    email: '',
    dob: '',
    city: '',
    studentgrade: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  signup() {
    this.userService.signup(this.user).subscribe(
      (response) => {
        // Handle successful registration response if needed
        console.log('Registration successful:', response);
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
  

