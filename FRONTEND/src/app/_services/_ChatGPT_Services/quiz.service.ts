import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerQuizService {
  
  // HOSTED BACKEND
  // private backendUrl = 'https://backend-ai-a6r3.onrender.com'

  //LOCAL BACKEND 
  private apiUrl = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  generateCareerQuiz(answers: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/quiz`, answers);
  }
}
