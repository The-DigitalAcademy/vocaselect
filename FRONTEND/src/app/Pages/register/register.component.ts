import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any = {
    name: '',
    surname:'',
    email: '',
    dob:'',
    city:'',
    studentgrade:'',
    password: '',
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,  public _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, surname,email,dob, city, studentgrade, password } = this.form;
    //This Method That Returns An Observable Object (authService.register())
    this.authService.register(name, surname,email,dob, city, studentgrade, password ).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this._router.navigate(['/subjects'])
        // this.reloadPage();
        // this.toastr.success("Registration Was Successful")
        
        // window.location.replace("/login")
        // Swal.fire({
        //   title: 'Registration Was Successful',
        //    text: 'You can now login!',
        //   icon: 'success',
        //   confirmButtonText: 'Login',
        // }).then((result)=>{
        //   if (result.value){
        //     this._router.navigate(["/login"])
            
        //   }})
         
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        // this.toastr.error("Registration Failed, Try Again")
      }
    });
  }
}
  

