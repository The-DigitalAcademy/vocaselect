import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';

@Injectable({
  providedIn: 'root'
})
export class SelectedCourseService {

  //hosted backend
  // private apiUrl = 'https://vocaselect-backend.onrender.com';

  //LOCAL BACKEND
  private baseUrl = 'http://localhost:9000'; 

  constructor(private http: HttpClient) {}

  selectedCourse(courseName: string): Observable<CourseRecommendation[]> {
    return this.http.post<CourseRecommendation[]>(`${this.baseUrl}/courseInfo`, { courseName });
  }


  //getting the data from AI
  getSelectedCourses(courseName: string): Observable<CourseRecommendation[]> {
    return this.http.get<CourseRecommendation[]>(`${this.baseUrl}/courseInfo?course=${courseName}`);
  }
}

