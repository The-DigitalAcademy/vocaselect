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
  form: any = {
    username: null,
    password: null
  };
  loginForm!:FormGroup;
  users!: any;
  email!: string;
  invalidCredentials = false;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, public router: Router,  private formB : FormBuilder,) { 
    this.loginForm=this.formB.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    });
  }

  ngOnInit(): void {
    this.tokenStorage.signOut();
  // if (this.tokenStorage.getToken())  {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }else{
    //   //redirect to login screen
    //}
    this.invalidCredentials = false;
  }
  

 onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        
        //alert("Login Successful")
        // this.reloadPage();
        // this.toastr.success("Login Successful")

        Swal.fire({
          title: 'Login was Successful',
           text: 'You are now logged in!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then((result)=>{
          if (result.value){
            this.router.navigate(['/home']);
          }});
        
      // window.location.replace("/homepage")
      //return this.isLoggedIn = true 
        
      },
      error: err => {
        console.log(err)
        if(err?.status == 401){
          this.errorMessage = "Incorrect username or password provided!";
        }else{
          this.errorMessage = err.error.message;
        }
        
        this.isLoginFailed = true;

        // this.toastr.error("Login Failed, Try Again")
      },
      
   });
 

  // isAuthenticated(): boolean{
  //   if (this.isLoggedIn = true){

  //   }
    // return true
  }
    // reloadPage(): void {
    //   window.location.reload();
    // }

    onLogin() {

      if (this.loginForm.valid) {       // Form is valid, perform login logic      
      
      this.authService.logIn(this.loginForm.value).subscribe(response => {
          // Handle the successful response here.
          console.log(response,"success");
          //this.session.saveLoggedUser(response)
           Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Successfully logged in.',
            confirmButtonColor: '#38A3A5',
            showConfirmButton: false,
            timer: 1400
          }).then((result)=>{
            this.router.navigate(["/home"])
            if (result.value){
           
            }})
          
        },
        (error) => {
          // Handle the error here or display it to the user.
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'User not found',
            text: 'Please enter correct credentials.',
            confirmButtonColor: '#38A3A5',
          })
          
        }
      );
       
     } else {
      this.invalidCredentials = true;
      console.log("Wrong credentials");
     }
  
    }
  
  }
