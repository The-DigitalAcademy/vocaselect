import { Component, Injectable, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
// import { AuthService } from 'src/app/_services/auth.service';
// import { TokenStorageService } from 'src/app/_services/token-storage.service';


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
  // isLoading: '';
  // roles: string[] = [];

  constructor(private userServ: UserService) { }

  login() {
    // this.isLoading = true;
    this.userServ.login(this.credentials).subscribe(
      (response) => {
        // Handle successful login here
        console.log('Login successful!', response);
        // You can redirect to another page or perform other actions upon successful login
        // this.isLoading = false;
      },
      (error) => {
        // Handle login error here
        console.error('Login failed!', error);
        // this.isLoading = false;
        // Show an error message to the user or perform other actions upon login failure
      }
    );
  }
  credentials(credentials: any) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  //  if (this.tokenStorage.getToken())  {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }else{
    //   //redirect to login screen
    }
}

