import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { iLogin } from '../Models/login';
import { Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authSvc: AuthService, private router: Router) {}

  loginData: iLogin = {
    email: '',
    password: '',
  };

  save() {
    this.authSvc
      .login(this.loginData)
      .pipe(take(1)) // prendo solo la prima occorrenza di risoluzione dell'observable
      .subscribe((data) => {
        this.router.navigate(['/dashboard']); // se il login va a buon fine, reindirizzo alla dashboard
      });
  }
}
