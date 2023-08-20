import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CareerRecommendation } from 'src/app/_Interface/career-recommendation';
// import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';

@Injectable({
  providedIn: 'root'
})
export class QuizSelectedCourseService {

  private baseUrl = 'http://localhost:9000'; 

  constructor(private http: HttpClient) {}

  //@POST
  career_Choice_Selected_Course(careerName: string): Observable<CareerRecommendation[]> {
    return this.http.post<CareerRecommendation[]>(`${this.baseUrl}/quizCourseInfo`, { careerName });
  }


  //getting the data from AI
  // @GET 
  Get_career_Choice_Selected_Course(careerName: string): Observable<CareerRecommendation[]> {
    return this.http.get<CareerRecommendation[]>(`${this.baseUrl}/quizCourseInfo?careerChoice=${careerName}`);
  }
}
