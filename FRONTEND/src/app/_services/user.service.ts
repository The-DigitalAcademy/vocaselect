import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// const apiUrl = environment.jwtSecret;

let APIUrl = environment.apiUrl; 


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuthenticated(): boolean {
    throw new Error('Method not implemented.');
  }

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
    return this.http.post<any>("http://localhost:9000/api/getAllQuiz", credentials, { headers });
  }


  // GETING QUIZZES FROM POSTGRES

  getQuizData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }
  

}
