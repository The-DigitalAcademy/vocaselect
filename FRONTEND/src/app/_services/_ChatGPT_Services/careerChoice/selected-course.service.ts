import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SelectedCourseService {
  ApiUrl = environment.apiUrl;  

  constructor(private http: HttpClient) {}

  selectedCourse(courseName: string): Observable<CourseRecommendation[]> {
    return this.http.post<CourseRecommendation[]>(`${this.ApiUrl}/courseInfo`, { courseName });
  }


  //getting the data from AI
  getSelectedCourses(courseName: string): Observable<CourseRecommendation[]> {
    return this.http.get<CourseRecommendation[]>(`${this.ApiUrl}/courseInfo?course=${courseName}`);
  }
}

