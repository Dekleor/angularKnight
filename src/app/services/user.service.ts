import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  root = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    const token = window.localStorage.getItem('auth-token');
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: `Bearer ${token}` })
    };
    console.log(httpOptions);
    return this.http.get<User>(`${this.root}/${id}`, httpOptions);
  }
}
