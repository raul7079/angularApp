import { Component, OnInit } from '@angular/core';
import {AutentificacionService} from '../servicio/autentificacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AutentificacionService, private route: Router) {
  }

  ngOnInit(): void {
    if (this.auth.logeado === false) {
      this.route.navigate(['login']);
    }
  }

  signOut() {
      this.auth.SignOut();
  }
}
