import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

let APIUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class QuizQuestionsService {

  constructor( private http: HttpClient ) {  }

// Example method to fetch quiz data from the postgres
  getData(): Observable<any> {
    return this.http.get(APIUrl + 'quizzes', { responseType: 'json' });
  }

  postQuizToPostgres(data: any[]): Observable<any> {
    return this.http.post(APIUrl + 'Answers', data, { responseType: 'json' });
  }

}
