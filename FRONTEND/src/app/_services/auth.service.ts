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
    console.log(username,password,"credentials")
   
    // if(username == 'neomakhubo25@gmail.com' && password == '12345678'){
    //   return true;
    // }

    // return false;
     return this.http.post(

      apiUrl + 'signin',
      {
        username,
        password,
      },
    
      httpOptions
    );
    
  }



  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      apiUrl + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(apiUrl + 'signout', { }, httpOptions);
  }
 
}
console.log("test");
