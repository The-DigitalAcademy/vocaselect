import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2';
import { parseISO, isValid, differenceInYears } from 'date-fns';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { log } from 'console';
import { UserService } from 'src/app/_services/user.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user: any;
  invalidCredentials = false;
  form: any = {
    name: '',
    surname: '',
    email: '',
    dob: new FormControl('', [Validators.required]),
    city: '',
    studentgrade: '',
    password: '',

  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  regInvalid = false;

  constructor(private authService: AuthService, private userService: UserService, public router: Router, private formBuilder: FormBuilder, private tokenStorage: TokenStorageService,) {
    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      surname: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      dob: [null, [Validators.required, this.validateDateOfBirth]],
      city: [null, [Validators.required, Validators.minLength(3)]],
      studentgrade: [null, [Validators.required, Validators.minLength(1)]],
      password: [null, [Validators.required, Validators.minLength(8), this.passwordValidator]]
    })
  }

  ngOnInit(): void {
    this.form.dob.setValidators([Validators.required, this.validateDateOfBirth]); // Add custom validator
    this.form.dob.updateValueAndValidity();
    this.regInvalid = false;
  }

  // Function to handle the button click event
  buttonLabel(): string {
    return this.registerForm.value.studentgrade >= 10 ? 'Next' : 'Register';
  }

  onButtonClick(): void {
    if (this.registerForm.value.studentgrade >= 10) {
      // Handle the logic for the "Register" button click
      // e.g., perform registration or any other action
      this.onRegister();
      console.log('Next button clicked!');
      this.router.navigate(['/subjects']);
    } else {
      // Handle the logic for the "Next" button click
      // e.g., proceed to the next step or action

      console.log('Register button clicked!');
      this.router.navigate(['/dream-job']);
    }
  }

  passwordValidator(control: FormControl): { [key: string]: boolean } | null {
    const value: string = control.value; const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value); const hasNumber = /\d/.test(value); const hasLetter = /[a-zA-Z]/.test(value); if (!hasSymbol || !hasNumber || !hasLetter) { return { invalidPassword: true }; } return null;
  }

  validateDateOfBirth(control: FormControl) {
    const selectedDate = parseISO(control.value);
    const currentDate = new Date();
    const age = differenceInYears(currentDate, selectedDate);

    if (!isValid(selectedDate) || age < 13) {
      return { invalidDateOfBirth: true };
    }

    return null;
  }

  login() {
    //log the user in using the credentials provided on register
    this.authService.login({ username: this.registerForm.value.email, password: this.registerForm.value.password }).subscribe({
      next: data => {

        //save the token and user data on token storage service.
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);

        //show notification that the user was successfully registered
        Swal.fire({
          title: 'Successfully registered',
          text: '',
          icon: 'success',
        }).then((result) => {
          if (result.value) {
            //navigate the user to subjects page if the student is in grade 10 or above
            //if the student is in a grade lower than 10 then the user will be navigated to dream-job page
            if (this.registerForm.value.studentgrade >= 10) {
              this.router.navigate(['/subjects']);
            } else {
              this.router.navigate(['/dream-job']);
            }
            return;
          }
        });
      },
      error: err => {
        console.log(err)
        // this.toastr.error("Login Failed, Try Again")
      }
    });
  }

  onCheck() {
    this.userService.checkEmailExists(this.registerForm.value.email).subscribe({
      next: (data) => {
        if (data.toString() === "true") {
          Swal.fire({
            title: 'This email already exists!',
            text: '',
            icon: 'error',
          }).then((result) => {
            if (result.value) {
              //return in this case means exit the function;
              return;
            }
          });
        }
      },

      error: (err) => {

        if (err.error?.errors?.length > 0) {

          for (var i = 0; i < err.error?.errors?.length; i++) {
            this.errorMessage += err.error?.errors[i]?.message;
          }
        } else {
          this.errorMessage = err.error?.message;
        }

        Swal.fire({
          title: 'Unsuccessful',
          text: this.errorMessage,
          icon: 'error',
        }).then((result) => {
          if (result.value) {

          }
        });
      }
    });
  }

  onRegister() {
    if (this.registerForm.valid) {

      //check if the email used for reistration doesn't exist
      //if it exist return an alert with email already exist
      //if email doen't exist create a new user
      this.userService.checkEmailExists(this.registerForm.value.email).subscribe({
        next: (data) => {
          console.log(data);
          if (data == "true") {
            Swal.fire({
              title: 'This email already exists!',
              text: '',
              icon: 'error',
            }).then((result) => {
              if (result.value) {
                return;
              }
            });
          } else {

            // create new user 
            this.authService.createUser(this.registerForm.value).subscribe(res => {
              this.user = res;
              //if user registration was successfull login in the user
              this.login();
            });
          }
        },

        error: (err) => {

          if (err.error?.errors?.length > 0) {

            for (var i = 0; i < err.error?.errors?.length; i++) {
              this.errorMessage += err.error?.errors[i]?.message;
            }
          } else {
            this.errorMessage = err.error?.message;
          }

          Swal.fire({
            title: 'Unsuccessful',
            text: this.errorMessage,
            icon: 'error',
          }).then((result) => {
            if (result.value) {
              return;
            }
          });
        }
      });
    } else {
      this.regInvalid = true;
      console.log('form not valid');
    }
  }
}