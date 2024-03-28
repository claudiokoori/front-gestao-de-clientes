import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../services/models/login.interface';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: Login = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService, private router: Router) {}


  submitForm(form: NgForm){
    if(form.valid){
      this.loginService.login(this.login).subscribe({
        next: (data) => {
          console.log('resposta', data)
          this.router.navigate(['/lista'])         
        },
        error: (erro) => {
          console.error('não foi possivel logar', erro)
        }
      })
    }
    
  }
}
