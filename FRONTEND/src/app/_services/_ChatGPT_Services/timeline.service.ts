import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

let APIUrl = environment.apiUrl; 

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

constructor(private http : HttpClient) { }

getTimeline(): Observable<any> {
  return this.http.get(APIUrl = environment.apiUrl + 'timeline', { responseType: 'json' });
}


}
