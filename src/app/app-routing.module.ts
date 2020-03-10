import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PedidosComponent} from './home/pedidos/pedidos.component';
import {ListaPedidosComponent} from './home/lista-pedidos/lista-pedidos.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/pedidos', component: PedidosComponent},
  { path: 'home/listaPedidos', component: ListaPedidosComponent},
  { path: '', component: LoginComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
