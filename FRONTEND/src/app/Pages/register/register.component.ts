import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2';
import { parseISO, isValid, differenceInYears } from 'date-fns';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'console';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  user: any;
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

  constructor(private authService: AuthService, private userService: UserService, public router: Router, private formBuilder: FormBuilder) {
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

  // isButtonDisabled(): boolean {
  //   return this.form.studentgrade <= 10 ? false : true;
  // }

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
  onSubmit(): void {
    const { name, surname, email, dob, city, studentgrade, password } = this.form;
    //This Method That Returns An Observable Object (authService.register())
    if (dob && !isValid(parseISO(dob))) {
      this.errorMessage = 'Invalid Date of Birth format. Please use yyyy-mm-dd.';
      return;
    }

    this.authService.register(name, surname, email, dob, city, studentgrade, password).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        // this._router.navigate(['/subjects'])
        // this.reloadPage();
        //this.toastr.success("Registration Was Successful")

        // window.location.replace("/login")
        Swal.fire({
          title: 'Registration Successful',
          text: '',
          icon: 'success',
          //confirmButtonText: 'Login',
        }).then((result) => {
          if (result.value) {
            this.router.navigate(["/subjects"])

          }
        });

      },

      error: (err) => {


        if (err.error.errors.length > 0) {

          // err.error.errors.forEach(element => {
          //   this.errorMessage += element.message;
          // });
          for (var i = 0; i < err.error.errors.length; i++) {
            this.errorMessage += err.error.errors[i].message;
          }
        } else {
          this.errorMessage = err.error.message;
        }

        Swal.fire({
          title: 'Registration was unsuccessful',
          text: this.errorMessage,
          icon: 'error',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.value) {
            //this._router.navigate(["/subjects"])

          }
        });
        this.isSignUpFailed = true;
        // this.toastr.error("Registration Failed, Try Again")
      }
    });
  }


onCheck(){
  this.userService.checkEmailExists(this.registerForm.value.email).subscribe({
    next: (data) => {
      console.log(data);
      if (data) {
        Swal.fire({
          title: 'This email already exists!',
          text: '',
          icon: 'error',
        }).then((result) => {
          if (result.value) {
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
          }else{
            if (this.registerForm.value.studentgrade >= 10) {
              // Handle the logic for the "Register" button click
              // e.g., perform registration or any other action
              this.authService.createUser(this.registerForm.value).subscribe(res => {
                this.user = res;
                this.router.navigate(['/subjects']);
        
              });
              
            } else {
              // Handle the logic for the "Next" button click
              // e.g., proceed to the next step or action
        
              this.authService.createUser(this.registerForm.value).subscribe(res => {
                this.user = res;
                this.router.navigate(['/dream-job']);
        
              });
            }
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
      
      

     
    } else {
      this.regInvalid = true;
      console.log('form not valid');

    }
  }
}