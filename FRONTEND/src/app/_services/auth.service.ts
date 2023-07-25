import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.baseUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

 
  login(username: string, password: string): Observable<any>  {
    // console.log(username,password,"credentials")
   
    // if(username == 'neomakhubo25@gmail.com' && password == '12345678'){
    //   return true; 
    // }

    // return false;
     return this.http.post(

      apiUrl + 'users/login',
      {
        username,
        password,
      },
    
      httpOptions
    );
    
  }



  register(name:string, surname:string,email:string,dob:string, city:string, studentgrade:any, password:string ): Observable<any> {
    
    // console.log('testing',  name, surname,email,dob, city, studentGrade, password)
    return this.http.post(
      apiUrl + 'users/signup',
      {
        name, surname,email,dob, city, studentgrade, password
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(apiUrl + 'signout', { }, httpOptions);
  }
 
}
console.log("test");
