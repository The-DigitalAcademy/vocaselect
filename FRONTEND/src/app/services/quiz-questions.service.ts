import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

let APIUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class QuizQuestionsService {

 // private apiUrl = 'http:localhost:2400/api/quizzes'; // Replace with your backend server URL



  constructor( private http: HttpClient ) {  }

// Example method to fetch quiz data from the postgres
  getData(): Observable<any> {
    return this.http.get(APIUrl = environment.apiUrl + 'quizzes', { responseType: 'json' });
  }

  postQuizToPostgres(data: any[]): Observable<any> {
    return this.http.post(APIUrl = environment.apiUrl + 'Answers', data, { responseType: 'json' });
  }

}
