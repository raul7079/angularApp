import {Component, NgZone, OnInit} from '@angular/core';
import {AutentificacionService} from '../servicio/autentificacion.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AutentificacionService) {
  }
  email: string;
  password: string;
  registrado = false;

  ngOnInit(): void {
    this.registrado = false;
  }

  signUp() {
    this.auth.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    this.registrado = true;
  }
  signIn() {
    this.auth.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
