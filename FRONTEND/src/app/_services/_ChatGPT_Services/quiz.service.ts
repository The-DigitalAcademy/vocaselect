import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerQuizService {
  
  // HOSTED BACKEND
  private backendUrl = 'https://backend-ai-a6r3.onrender.com'

  //LOCAL BACKEND 
  // private backendUrl = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  submitQuizAnswers(answers: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/quiz`, answers);
  }
}
