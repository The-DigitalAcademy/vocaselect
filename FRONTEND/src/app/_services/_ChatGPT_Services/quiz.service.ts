import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CareerRecommendation } from 'src/app/_Interface/career-recommendation';

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
    return this.http.post<CareerRecommendation[]>(`${this.apiUrl}/quiz`, answers);
  }
}

// const body = { careerChoice };
//     return this.http.post<CourseRecommendation[]>(`${this.apiUrl}/enterCareer`, body);