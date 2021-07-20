import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Character} from '../models/character';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiRoot = 'http://localhost:8000/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiRoot).pipe(map(char => char['hydra:member']));
  }


  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiRoot}/${id}`);
  }

  add(formValues: Character): Observable<Character> {
    return this.http.post<Character>(this.apiRoot, formValues);
  }

}
