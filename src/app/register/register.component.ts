import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../services/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private http: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.newUser = this.fb.group( {
      username: [Validators.required],
      password: [Validators.required],
    });
  }

  submitForm(): void {
    this.submitted = true;

    if (this.newUser.valid) {
      this.submitted = false;
      const formValues = this.newUser.value;
      this.http.addUser(formValues).subscribe();
      this.router.navigate(['home']);
      this.newUser.reset();
    }
  }
}
