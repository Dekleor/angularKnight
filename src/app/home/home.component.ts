import { Component, OnInit } from '@angular/core';
import {Main} from '../../main';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user!: User;
  isAdmin = false;
  isUser = false;

  constructor(private http: UserService, private activatedRoute: ActivatedRoute, private loginComponent: LoginComponent) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const token = window.localStorage.getItem(Main.TOKEN_KEY);

    if (token) {
      const jwt = token;
      const jwtData = jwt.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);
      if (decodedJwtData.roles[0] === 'ROLE_ADMIN' || decodedJwtData.roles[1] === 'ROLE_ADMIN') {
        this.isAdmin = true;
      } else {
        this.isUser = true;
      }
    }
  }

}
