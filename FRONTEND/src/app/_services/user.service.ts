import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

const apiUrl = environment.apiUrl;
const updateUrl = 'http://localhost:9000/api/'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuthenticated(): boolean {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(apiUrl + '/users', { responseType: 'text' });
  }

  getUserById(): Observable<any> {
    return this.http.get(apiUrl + 'users/getUserById', { responseType: 'text' });

  }

  getUserByEmail(email:any): Observable<any> {
    return this.http.get(apiUrl + '/users/email/' + email, { responseType: 'json' });
  }
  
  saveUser(body: any){
    return this.http.post<any>(apiUrl+ '/users', body)
  }

  
  checkEmailExists(email:any): Observable<any> {
    return this.http.get(apiUrl + 'users/emailexist/' + email, { responseType: 'text' });
  }

  updateProfile( id:number, profileData: any) : Observable<any> {
    return this.http.put(updateUrl +'updateuser/' + id , profileData, { responseType: 'json' });

}
}