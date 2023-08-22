import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
import { CareerRecommendation } from 'src/app/_Interface/career-recommendation';

@Injectable({
  providedIn: 'root',
})
export class CareerRecommendationService {
  //hosted backend
  // private apiUrl = 'https://vocaselect-backend.onrender.com';

  //local backend URL
  private apiUrl = 'http://localhost:9000'; 

  constructor(private http: HttpClient) {}

  generateCourses(careerChoice: string): Observable<CourseRecommendation[]> {
    // return this.http.post(`${this.apiUrl}/enterCareer`, { careerChoice });
    const body = { careerChoice };
    return this.http.post<CourseRecommendation[]>(`${this.apiUrl}/enterCareer`, body);
  }

  // Define a method to fetch course details by name
  getCourseDetailsByName(courseName: string, uniName: string, admissionRequirements: string, courseDescription:string): Observable<CareerRecommendation[]> {
    const body = { courseName, uniName, admissionRequirements, courseDescription };
    return this.http.post<CareerRecommendation[]>(`${this.apiUrl}/enterCareer`, body);
  }
}
