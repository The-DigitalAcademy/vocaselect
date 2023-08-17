import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Users } from '../_Interface/users';

const apiUrl = environment.baseUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(credentials:any): Observable<any> {

    return this.http.post(

      apiUrl + 'users/login',
      credentials,

      httpOptions
    );

  }



  register(name: string, surname: string, email: string, dob: string, city: string, studentgrade: any, password: string): Observable<any> {

    // console.log('testing',  name, surname,email,dob, city, studentGrade, password)
    return this.http.post(
      apiUrl + 'users/signup',
      {
        name, surname, email, dob, city, studentgrade, password
      },
      httpOptions
    );
  }

  logIn(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${apiUrl}users/login`, credentials).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error here or rethrow it to be caught by the component.
        return throwError(error.error.message);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(apiUrl + 'signout', {}, httpOptions);
  }

  createUser(users: Users): Observable<any> {

    return this.http.post(
      apiUrl + 'users/signup', { users },
      httpOptions
    );
  }
  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${apiUrl}users/request-password-reset`, { email }, httpOptions);
}

resetPassword(token: string, password: string): Observable<any> {
  return this.http.post(`${apiUrl}users/reset-password`, { token, password }, httpOptions);
}
}