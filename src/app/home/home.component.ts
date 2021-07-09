import { Component, OnInit } from '@angular/core';
import {Main} from '../../main';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user';
import {LoginComponent} from '../login/login.component';
import {isEmpty} from 'rxjs/operators';

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

    if (Main.TOKEN_KEY) {
      this.http.getUser(Number(id)).subscribe(res => {
        this.user = res;
        console.log(this.user.roles);
        if (token) {
          this.isAdmin = true;
        } else {
          this.isUser = true;
        }
      });
    }
  }

}
