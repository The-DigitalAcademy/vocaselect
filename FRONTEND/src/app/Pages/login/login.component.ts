import { Component, Injectable, OnInit } from '@angular/core';
import {UserService} from "../../_services/user.service"
import { Router } from '@angular/router';
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
[x: string]: any;

  
  form: any = {
    username: null,
    password: null,
  
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  // isLoading: '';
  // roles: string[] = [];

  constructor(private userService: UserService) { }



  ngOnInit(): void {
  //  if (this.tokenStorage.getToken())  {
    //   this.isLoggedIn = true;
    //   this.roles = this.storageService.getUser().roles;
    // }else{
    //   //redirect to login screen
    }


    login(){
     console.log(this.form)

    //  if(this.form)
        return  this.userService.login(this.form).subscribe((res:any)=>{
        
      })
    }
}

