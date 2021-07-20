import { Injectable } from '@angular/core';
import {Main} from '../../main';

@Injectable({
  providedIn: 'root'
})
export class LogoffService {

  constructor() { }


  deleteToken(): void {
    window.localStorage.removeItem('auth-token');
  }
}
