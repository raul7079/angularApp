import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {PedidosService} from '../../servicio/pedidos.service';
import {AutentificacionService} from '../../servicio/autentificacion.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  private router: Router;

  constructor(public pedidosService: PedidosService, public auth: AutentificacionService, private route: Router ) {
  }

  productos = ['Coca-Cola', 'Agua', 'Cafe', 'Fanta-Naranja', 'Fanta-Limon', 'Cerveza', 'Cerveza-Sin-Alcohol', 'Zumo', 'Tinto'];
  productoPedido = [];

  ngOnInit(): void {
    if (this.auth.logeado === false) {
      this.route.navigate(['login']);
    }
  }

  addProducto = producto => this.productoPedido.push(producto);
  removeProducto = producto => {
    const index = this.productoPedido.indexOf(producto);
    if (index > -1) {
      this.productoPedido.splice(index, 1);
    }
  }

  Enviar() {
    this.pedidosService.form.value.productoPedido = this.productoPedido;
    const data = this.pedidosService.form.value;

    this.pedidosService.crearProductosPedidos(data)
      .then(res => {
        window.location.reload();
      });
  }
}

