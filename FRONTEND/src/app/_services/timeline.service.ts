import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

let APIUrl = environment.baseUrl; 

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

constructor(private http : HttpClient) { }

// Fetching timeline data from backend
getTimeline(): Observable<any> {
  return this.http.get(APIUrl  + 'timeline', { responseType: 'json' });
}


}
