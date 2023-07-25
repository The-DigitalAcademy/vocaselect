import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// const apiUrl = environment.jwtSecret;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiURL;
  constructor(private http: HttpClient) {}

  //Sign Up
  signup(user: any) {
    const jwtSecret = environment.jwtSecret; // Access the JWT secret from the environment
    const headers = { Authorization: `Bearer ${jwtSecret}` };
    return this.http.post<any>(`${this.apiUrl}/signup`, user, { headers });
  }

  //Sign In
  login(credentials: any) {
    const jwtSecret = environment.jwtSecret; // Access the JWT secret from the environment
    const headers = { Authorization: `Bearer ${jwtSecret}` };
    return this.http.post<any>(`${this.apiUrl}/login`, credentials, { headers });
  }



}
