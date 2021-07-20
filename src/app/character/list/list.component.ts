import { Component, OnInit } from '@angular/core';
import {CharacterService} from '../../services/character.service';
import {Character} from '../../models/character';
import {Main} from '../../../main';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: CharacterService, private fb: FormBuilder) { }
  allCharacters: Character[];

  getCharacters(): void {
    this.http.getCharacters().subscribe(foo => { this.allCharacters = foo; } );
  }

  ngOnInit(): void {
    this.getCharacters();
  }
}
