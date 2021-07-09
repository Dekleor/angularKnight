import { Component, OnInit } from '@angular/core';
import {Character} from '../../models/character';
import {CharacterService} from '../../services/character.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  character: Character;

  constructor(private detail: CharacterService, private activateRoute: ActivatedRoute, private router: Router) { }

  getCharacter(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.detail.getCharacter(Number(id)).subscribe(characters => this.character = characters);
  }

  ngOnInit(): void {
    this.getCharacter();
  }

}
