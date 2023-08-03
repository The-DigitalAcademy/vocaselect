import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CareerRecommendationService {
  private apiUrl = 'http://localhost:9000'; // Replace with the actual backend API URL

  constructor(private http: HttpClient) {}

  getCareerRecommendations(careerChoice: string): Observable<any> {
    //input for the user 
    const requestBody = { careerChoice };
    return this.http.post<any>(`${this.apiUrl}/enterCareer`, requestBody);
  }
}
