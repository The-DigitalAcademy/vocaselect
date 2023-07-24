import { Component, Injectable, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';


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

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
   if (this.tokenStorage.getToken())  {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }else{
    //   //redirect to login screen
    }
  }
  

 onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        //alert("Login Successful")
        this.reloadPage();
        // this.toastr.success("Login Successful")
        
       window.location.replace("/homepage")
      //return this.isLoggedIn = true
        
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        // this.toastr.error("Login Failed, Try Again")
      },
      
   });
 

  // isAuthenticated(): boolean{
  //   if (this.isLoggedIn = true){

  //   }
    // return true
  }
    reloadPage(): void {
      window.location.reload();
    }
  }
