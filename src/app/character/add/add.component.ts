import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CharacterService} from '../../services/character.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  newCharacter: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private http: CharacterService) { }

  ngOnInit(): void {
    this.newCharacter = this.fb.group( {
      name: [Validators.required],
      background: [Validators.required],
      coatOfArms: [],
      portrait: [],
      division: [],
      armor: [Validators.required],
      });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.newCharacter.valid) {
      this.submitted = false;
      const formValues = this.newCharacter.value;
      this.http.add(formValues).subscribe();
      this.newCharacter.reset();
    }
  }

}
