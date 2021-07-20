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
  nbUser: number;
  nbChar: number;
  isCollapsed = false;

  countUsers(): void {
    this.http.countUsers().subscribe(userRes => { this.allUsers = userRes; this.nbUser = userRes.length; });
  }

  countCharacters(): void {
    this.http.countCharacters().subscribe(charaRes => { this.allCharacters = charaRes; this.nbChar = charaRes.length; });
  }

  ngOnInit(): void {
    this.countUsers();
    this.countCharacters();
  }





}
