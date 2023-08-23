import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
import { environment } from 'src/environments/environment';

let ApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SelectedCourseService {

  constructor(private http: HttpClient) {}

  selectedCourse(courseName: string): Observable<CourseRecommendation[]> {
    return this.http.post<CourseRecommendation[]>(`${ApiUrl}/courseInfo`, { courseName });
  }


  //getting the data from AI
  getSelectedCourses(courseName: string): Observable<CourseRecommendation[]> {
    return this.http.get<CourseRecommendation[]>(`${ApiUrl}/courseInfo?course=${courseName}`);
  }
}

