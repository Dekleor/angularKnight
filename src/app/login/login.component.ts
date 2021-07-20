import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { catchError, first } from 'rxjs/operators';
import {User} from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: AuthenticationService, private fb: FormBuilder, private router: Router) {
  }

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  user: User;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm(): void {
    this.submitted = true;
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      this.http.login(formValues).subscribe(res => {
        this.http.saveToken(res.token);
        this.router.navigate(['home']).then(() => window.location.reload() );
      });
      this.loginForm.reset();
      this.submitted = false;
    }
  }
}
