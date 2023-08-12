import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CareerRecommendationService {
  //hosted backend
  private apiUrl = 'https://backend-ai-a6r3.onrender.com/enterCareer';

  //local backend URL
  // private apiUrl = 'http://localhost:9000/enterCareer'; 

  constructor(private http: HttpClient) {}

  generateCourses(careerChoice: string): Observable<any> {
    // return this.http.post(`${this.apiUrl}/enterCareer`, { careerChoice });

    return this.http.post<any>(this.apiUrl, { careerChoice });
  }
}
