import { Component } from '@angular/core';
import { Prenda } from '../../interfaces/prenda';
import { PrendasPedidas } from '../../interfaces/prendasPedidas.interface';
import { HacerPedidoPrendaService } from '../../services/hacer-pedido-prenda.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: ``
})
export class PedidosComponent {

  prendas: Prenda[] = [];  // Cargar desde API
  pedido: PrendasPedidas ={
    EmpleadoId: 0,
    FechaPedido : new Date(),
    IdPrenda: 0,
    talle:    '',
    cantidad: 0
  };


  constructor(private pedidoService:HacerPedidoPrendaService){}

  ngOnInit(): void {
    this.insertarPedido()
  }
 

  insertarPedido():void {

    console.log('Pedido guardado', this.pedido);
    // Aquí el pedido se pasará con el tipo de la interfaz
    this.pedidoService.postIngresarPedidoPrenda(this.pedido).subscribe({
      next: (pedido: PrendasPedidas) => {
        console.log('Pedido ingresado con éxito', pedido);
      },
      error: (error: any) => {
        console.error('Error al ingresar el pedido', error);
      }
  })
    
                      
    
}

}



