import { Component, OnInit } from '@angular/core';
import {PedidosService} from '../../servicio/pedidos.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  constructor(public pedidosService: PedidosService) { }

  productoPedidos;

  ngOnInit(): void {
    this.getProductoPedidos();
  }
  getProductoPedidos = () =>
    this.pedidosService
      .getProductoPedidos()
      .subscribe(res => (this.productoPedidos = res))

  completado = data =>
    this.pedidosService.modificarProductoPedido(data)
  borrarPedido = data => this.pedidosService.borrarPedido(data);
}
