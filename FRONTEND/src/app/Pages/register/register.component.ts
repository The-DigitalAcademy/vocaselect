import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2';

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
        //this._router.navigate(['/subjects'])
        // this.reloadPage();
        //this.toastr.success("Registration Was Successful")
        
        // window.location.replace("/login")
        Swal.fire({
          title: 'Registration Successful',
           text: '',
          icon: 'success',
          //confirmButtonText: 'Login',
        }).then((result)=>{
          if (result.value){
            this._router.navigate(["/subjects"])
            
          }});
         
      },
      error: (err) => {
       

        if(err.error.errors.length > 0){
          
          // err.error.errors.forEach(element => {
          //   this.errorMessage += element.message;
          // });
          for(var i =0; i < err.error.errors.length; i++){
            this.errorMessage += err.error.errors[i].message;
          }
        }else{
          this.errorMessage = err.error.message;
        }

        Swal.fire({
          title: 'Registration was unsuccessful',
           text: this.errorMessage,
          icon: 'error',
          confirmButtonText: 'Ok',
        }).then((result)=>{
          if (result.value){
            //this._router.navigate(["/subjects"])
            
          }});
        this.isSignUpFailed = true;
        // this.toastr.error("Registration Failed, Try Again")
      }
    });
  }
}
  

