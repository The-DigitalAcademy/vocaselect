import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
// import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';

@Injectable({
  providedIn: 'root'
})
export class QuizSelectedCourseService {

  private baseUrl = 'http://localhost:9000'; 
  

  constructor(private http: HttpClient) {}

  //@POST
  career_Choice_Selected_Course(careerName: string): Observable<CourseRecommendation[]> {
    return this.http.post<CourseRecommendation[]>(`${this.baseUrl}/quizCourseInfo`, { careerName });
  }


  //getting the data from AI
  // @GET 
  Get_career_Choice_Selected_Course(careerName: string): Observable<CourseRecommendation[]> {
    return this.http.get<CourseRecommendation[]>(`${this.baseUrl}/quizCourseInfo?career=${careerName}`);
  }
}
