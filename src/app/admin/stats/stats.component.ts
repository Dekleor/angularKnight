import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Character} from '../../models/character';
import {AdminService} from '../../services/admin.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private http: AdminService) { }

  allUsers: User[];
  allCharacters: Character[];

  ngOnInit(): void {
  }

  countUsers(): void {
    this.http.countUsers().subscribe(foo => this.allUsers = foo);
  }

  countCharacters(): void {
    this.http.countCharacters().subscribe(foo => this.allCharacters = foo);
  }

}
