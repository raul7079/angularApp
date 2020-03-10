import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private firestore: AngularFirestore) {
  }

  form = new FormGroup({
    nombreCliente: new FormControl(''),
    numeroPedido: new FormControl(''),
    productoPedido: new FormControl(''),
    completado: new FormControl(false)
  });

  crearProductosPedidos(data) {
    return this.firestore.collection('productosPedidos').add({
      numPedido: data.numeroPedido,
      nombreCliente: data.nombreCliente,
      producto: data.productoPedido
  });
  }
  getProductoPedidos() {
    return this.firestore.collection('productosPedidos').snapshotChanges();
  }

  modificarProductoPedido(data) {
    return this.firestore
      .collection('productosPedidos')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  borrarPedido(data) {
    return this.firestore
      .collection('productosPedidos')
      .doc(data.payload.doc.id)
      .delete();
  }
}
