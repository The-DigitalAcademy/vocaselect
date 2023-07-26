import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(apiUrl + '/users', { responseType: 'text' });
  }

  getUserByEmail(email:any): Observable<any> {
    return this.http.get(apiUrl + '/users/email/' + email, { responseType: 'json' });
  }
  
  saveUser(body: any){
    return this.http.post<any>(apiUrl+ '/users', body)
  }


}
