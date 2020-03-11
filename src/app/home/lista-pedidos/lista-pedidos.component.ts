import { Component, OnInit } from '@angular/core';
import {PedidosService} from '../../servicio/pedidos.service';
import {AutentificacionService} from '../../servicio/autentificacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  constructor(public pedidosService: PedidosService, public auth: AutentificacionService, private route: Router) { }

  productoPedidos;

  ngOnInit(): void {
    this.getProductoPedidos();
    if (this.auth.logeado === false) {
      this.route.navigate(['login']);
    }
  }
  getProductoPedidos = () =>
    this.pedidosService
      .getProductoPedidos()
      .subscribe(res => (this.productoPedidos = res))

  completado = data =>
    this.pedidosService.modificarProductoPedido(data)
  borrarPedido = data => this.pedidosService.borrarPedido(data);
}
