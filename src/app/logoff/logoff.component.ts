import { Component, OnInit } from '@angular/core';
import {LogoffService} from '../services/logoff.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(private http: LogoffService, private router: Router) { }

  ngOnInit(): void {
    this.http.deleteToken();
    this.router.navigate(['home']).then(() => window.location.reload() );
  }

}
