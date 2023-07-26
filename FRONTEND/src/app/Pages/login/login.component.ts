import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import Swal from 'sweetalert2';

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
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, public _router: Router) { }

  ngOnInit(): void {
    this.tokenStorage.signOut();
  // if (this.tokenStorage.getToken())  {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }else{
    //   //redirect to login screen
    //}
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
            this._router.navigate(['/home']);
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
  }
