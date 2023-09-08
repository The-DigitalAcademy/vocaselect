import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


let APIUrl = environment.apiUrl;

@Injectable({
    providedIn: 'root'
  })
export class ViewCareerService {


constructor(private http: HttpClient) { }



// Example method to fetch quiz data from the postgres
getCareerData(): Observable<any> {
    return this.http.get(APIUrl + 'quiz', { responseType: 'json' });
  }
}
