import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://backend-1-jclq.onrender.com/api'; 
@Injectable({
  providedIn: 'root'
})

export class SubjectsService {

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<any> {
    return this.http.get(API_URL + '/subjects', { responseType: 'json' });
  }
  getSubjectsById(id:any): Observable<any> {
    return this.http.get(API_URL+'/subjects'+ id, { responseType: 'json' });
  }

}
