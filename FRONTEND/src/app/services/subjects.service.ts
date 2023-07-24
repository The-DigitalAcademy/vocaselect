import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  constructor(private http: HttpClient) { }

  getPoses(): Observable<any> {
    return this.http.get(API_URL + '/poses', { responseType: 'json' });
  }
  getPosesById(id:any): Observable<any> {
    return this.http.get(API_URL+'/poses'+ id, { responseType: 'json' });
  }

}
