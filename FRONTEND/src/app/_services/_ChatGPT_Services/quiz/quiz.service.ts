import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CareerRecommendation } from 'src/app/_Interface/career-recommendation';
import { environment } from 'src/environments/environment';

let ApiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CareerQuizService {

  constructor(private http: HttpClient) {}

  generateCareerQuiz(answers: any): Observable<CareerRecommendation[]> {
    return this.http.post<CareerRecommendation[]>(`${ApiUrl}/quiz`, answers);
  }
}

