import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

let APIUrl = environment.baseUrl; 
@Injectable({
  providedIn: 'root'
})

export class SubjectsService {

  constructor(private http: HttpClient) { }

  // Getting subjects from database
  getSubjects(): Observable<any> {
    return this.http.get(APIUrl + 'subjects', { responseType: 'json' });
  }
  // Getting subjects by id
  getSubjectsById(id:any): Observable<any> {
    return this.http.get(APIUrl +'subjects'+ id, { responseType: 'json' });
  }

  // Saving selected subjects on the database
  saveSelectedSubjects(data: any[]): Observable<any> {
    return this.http.post(APIUrl + 'user_selected_subjects', data, { responseType: 'json' });
  }

  // Updating marks for user selected subjects
  updateSelectedSubjects(data: any[]): Observable<any> {
    return this.http.post( APIUrl+ 'user_selected_subjects/update', data, { responseType: 'json' });
  }
  
  // Getting user stored selected subjects from database
  getSelectedSubjects(id:any): Observable<any> {
    return this.http.get(APIUrl + 'user_selected_subjects/'+ id, { responseType: 'json' });
  }
}