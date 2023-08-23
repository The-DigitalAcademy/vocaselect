import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
import { environment } from 'src/environments/environment';


let ApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class QuizSelectedCourseService {

  constructor(private http: HttpClient) {}

  //@POST
  career_Choice_Selected_Course(careerName: string): Observable<CourseRecommendation[]> {
    return this.http.post<CourseRecommendation[]>(`${ApiUrl}/quizCourseInfo`, { careerName });
  }


  //getting the data from AI
  // @GET 
  Get_career_Choice_Selected_Course(careerName: string): Observable<CourseRecommendation[]> {
    return this.http.get<CourseRecommendation[]>(`${ApiUrl}/quizCourseInfo?career=${careerName}`);
  }
}
