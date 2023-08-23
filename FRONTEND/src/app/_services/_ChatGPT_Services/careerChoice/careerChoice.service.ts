import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
import { CareerRecommendation } from 'src/app/_Interface/career-recommendation';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})


export class CareerRecommendationService {
  ApiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  generateCourses(careerChoice: string): Observable<CourseRecommendation[]> {
    // return this.http.post(`${this.apiUrl}/enterCareer`, { careerChoice });
    const body = { careerChoice };
    return this.http.post<CourseRecommendation[]>(`${this.ApiUrl}/enterCareer`, body);
  }

  // Define a method to fetch course details by name
  getCourseDetailsByName(courseName: string, uniName: string, admissionRequirements: string, courseDescription:string): Observable<CareerRecommendation[]> {
    const body = { courseName, uniName, admissionRequirements, courseDescription };
    return this.http.post<CareerRecommendation[]>(`${this.ApiUrl}/enterCareer`, body);
  }

}
