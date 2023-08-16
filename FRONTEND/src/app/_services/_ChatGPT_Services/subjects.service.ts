import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

let APIUrl = environment.apiUrl; 
@Injectable({
  providedIn: 'root'
})

export class SubjectsService {

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<any> {
    return this.http.get(APIUrl = environment.apiUrl + 'subjects', { responseType: 'json' });
  }
  getSubjectsById(id:any): Observable<any> {
    return this.http.get(APIUrl = environment.apiUrl +'subjects'+ id, { responseType: 'json' });
  }

  saveSelectedSubjects(data: any[]): Observable<any> {
    return this.http.post(environment.apiUrl + 'user_selected_subjects', data, { responseType: 'json' });
  }

  updateSelectedSubjects(data: any[]): Observable<any> {
    return this.http.post(environment.apiUrl + 'user_selected_subjects/update', data, { responseType: 'json' });
  }

  getSelectedSubjects(id:any): Observable<any> {
    return this.http.get(environment.apiUrl + 'user_selected_subjects/'+ id, { responseType: 'json' });
  }
}