import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {Character} from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  userRoot = 'http://localhost:8000/api/users';
  characterRoot = 'http://localhost:8000/api/characters';

  numberOfChar: any;
  numberOfUser: any;

  constructor(private http: HttpClient) { }

  countUsers(): Observable<User[]> {
    this.numberOfUser = this.http.get<User[]>(this.userRoot);
    return this.numberOfUser.length;
  }

  countCharacters(): Observable<Character[]> {
    this.numberOfChar = this.http.get<Character[]>(this.characterRoot);
    return this.numberOfChar.length;
  }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.characterRoot);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userRoot);
  }

  deleteUser(id: number): Observable<undefined> {
    return this.http.delete<undefined>(`${this.userRoot}/${id}`);
  }

  deleteCharacter(id: number): Observable<undefined> {
    return this.http.delete<undefined>(`${this.characterRoot}/${id}`);
  }
}
