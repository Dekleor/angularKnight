import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Main} from '../../main';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  root = 'http://127.0.0.1:8000/api/login';

  constructor(private http: HttpClient) {
  }

  login(loginForm: User): any {
    return this.http.post<User>(this.root, loginForm);
  }

  saveToken(token: any): void {
    // if a token already exist, delete it
    window.localStorage.removeItem(Main.TOKEN_KEY);
    // save the new token
    window.localStorage.setItem(Main.TOKEN_KEY, token);
  }

  // saveIsLogged(isLogged: boolean): void{
  //   // if a token already exist, delete it
  //   window.localStorage.removeItem(isLogged);
  //   // save the new token
  //   window.localStorage.setItem(Main.TOKEN_KEY, token);
  // }
}
