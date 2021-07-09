import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';
import {Character} from '../../models/character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: CharacterService) { }
  allCharacters: Character[];

  getCharacters(): void {
    this.http.getCharacters().subscribe(foo => this.allCharacters = foo);
  }

  ngOnInit(): void {
    this.getCharacters();
  }

}
