import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { catchError, first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: AuthenticationService, private fb: FormBuilder, private router: Router) { }

  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  isLogged = false;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required ]
    });
  }

  submitForm(): void{
    this.submitted = true;
    if (this.loginForm.valid){
      this.isLogged = true;
      const formValues = this.loginForm.value;
      this.http.login(formValues)
        .subscribe((res: { token: any; }) => this.http.saveToken(res.token));
      this.router.navigate(['/home']);
      this.loginForm.reset();
      this.submitted = false;
    }

  }

}
