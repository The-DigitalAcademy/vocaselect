import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CareerRecommendationService {
  private apiUrl = 'http://localhost:9000/enterCareer'; // Replace with the actual backend API URL

  constructor(private http: HttpClient) {}

  generateCourses(careerChoice: string): Observable<any> {
    // return this.http.post(`${this.apiUrl}/enterCareer`, { careerChoice });

    return this.http.post<any>(this.apiUrl, { careerChoice });
  }
}
