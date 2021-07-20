import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CharacterService} from '../../services/character.service';
import {Character} from '../../models/character';
import {Router} from '@angular/router';
import {Main} from '../../../main';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addCharaForm: FormGroup;
  character: Character;
  submitted = false;
  loading = false;
  error = '';

  constructor(private fb: FormBuilder, private http: CharacterService, private router: Router) { }
  token = window.localStorage.getItem(Main.TOKEN_KEY);


  ngOnInit(): void {
    this.addCharaForm = this.fb.group({
      name: ['', Validators.required],
      background: ['', Validators.required],
      division: ['', Validators.required],
      armor: ['', Validators.required],
      portrait: ['', Validators.required],
      coatOfArms: ['', Validators.required],
    });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.addCharaForm.valid) {
      const formValues = this.addCharaForm.value;
      this.http.add(formValues).subscribe(res => {
        this.router.navigate(['character']).then(() => window.location.reload() );
      });
      this.addCharaForm.reset();
      this.submitted = false;
    }
  }

}
