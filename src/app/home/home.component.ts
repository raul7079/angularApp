import { Component, OnInit } from '@angular/core';
import {AutentificacionService} from '../servicio/autentificacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AutentificacionService) { }

  ngOnInit(): void {
  }

  signOut() {
      this.auth.SignOut();
  }
}
