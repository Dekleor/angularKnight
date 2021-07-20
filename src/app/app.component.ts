import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {LoginComponent} from './login/login.component';
import {ActivatedRoute} from '@angular/router';
import {Main} from '../main';
import {User} from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularKnight';
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
