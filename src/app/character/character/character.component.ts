import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../../models/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public isCollapsed = true;

  constructor() { }

  @Input() character: Character;

  ngOnInit(): void {
  }

}
