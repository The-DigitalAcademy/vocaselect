import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';

@Injectable({
  providedIn: 'root',
})
export class CareerRecommendationService {
  //hosted backend
  // private apiUrl = 'https://backend-ai-a6r3.onrender.com/enterCareer';

  //local backend URL
  private apiUrl = 'http://localhost:9000'; 

  constructor(private http: HttpClient) {}

  generateCourses(careerChoice: string): Observable<CourseRecommendation[]> {
    // return this.http.post(`${this.apiUrl}/enterCareer`, { careerChoice });
    const body = { careerChoice };
    return this.http.post<CourseRecommendation[]>(`${this.apiUrl}/generateCareer`, body);
  }
}
