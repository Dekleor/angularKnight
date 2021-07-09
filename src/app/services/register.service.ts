import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  root = 'http://127.0.0.1:8000/api/users';

  constructor(private http: HttpClient) { }

  addUser(formValues: User): Observable<User> {
    return this.http.post<User>(this.root, formValues);
  }
}
