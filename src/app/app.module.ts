import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './home/pedidos/pedidos.component';
import { ListaPedidosComponent } from './home/lista-pedidos/lista-pedidos.component';
import {PedidosService} from './servicio/pedidos.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    ListaPedidosComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
  ],
  providers: [PedidosService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule { }
