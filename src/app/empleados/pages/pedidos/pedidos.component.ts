
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Empleado } from '../../interfaces/empleados.interface';
import { Prenda } from '../../interfaces/prenda';
import { PrendasPedidas } from './../../interfaces/prendasPedidas.interface';
import { HacerPedidoPrendaService } from '../../services/hacer-pedido-prenda.service';

import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: ``
})



export class PedidosComponent  implements OnInit  {

  public empleadoSeleccionado: Empleado | null = null;
  
  
  prendas: Prenda[] = [];  // Cargar desde API
  
  pedido: PrendasPedidas ={
    EmpleadoId: 0,
    FechaPedido : new Date(),
    IdPrenda: 0,
    Talle:    '',
    Cantidad: 0
  };

  constructor(private pedidoService:HacerPedidoPrendaService,private router: Router){}
 

  ngOnInit():void{
    this.ObtenerPrendas();
    this.recibirDatosDeTablaEmpleados();
  }

  private recibirDatosDeTablaEmpleados(){
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.empleadoSeleccionado = navigation.extras.state['empleadoSeleccionado'];
      if (this.empleadoSeleccionado) {
        // Establecer los datos del empleado en `pedido`
        this.pedido.EmpleadoId = this.empleadoSeleccionado.id;
        console.log('Empleado seleccionado:', this.empleadoSeleccionado);
      }
    }
    if (this.empleadoSeleccionado) {
      console.log('Empleado seleccionado:', this.empleadoSeleccionado);
    }

  }

  ObtenerPrendas()
  {
    
    this.pedidoService.getPrendas().subscribe(prendas=>this.prendas=prendas);
  }

  onPrendaChange(event: any) {
    // Captura solo el id de la prenda seleccionada
    if (event.value) {
      this.pedido.IdPrenda = event.value.id; // Suponiendo que event.value tiene el objeto de prenda
      console.log('ID de Prenda seleccionada:', this.pedido.IdPrenda);
    } else {
      this.pedido.IdPrenda = 0; // Restablece a 0 si no hay prenda seleccionada
    }
  }



  insertarPedido()
  {
    if (this.pedido.Talle.length > 10) {
      console.error("El campo Talle no puede tener más de 10 caracteres.");
      return; // Detiene la ejecución si Talle es demasiado largo
    }
        this.pedido.FechaPedido = new Date();
        this.pedido.EmpleadoId = Number(this.pedido.EmpleadoId);
        
        // Validar que todos los campos estén llenos y sean correctos
        if (this.pedido.EmpleadoId <= 0 || this.pedido.IdPrenda <= 0 || !this.pedido.Talle || 
            this.pedido.Cantidad <= 0) {
          console.error("Por favor, completa todos los campos requeridos.");
          return;
        }

        console.log('Pedido a enviar:', this.pedido);
        console.log('Id de empleado',this.pedido.EmpleadoId); 
        console.log('Talla',this.pedido.Talle); 
        console.log('Id Prenda',this.pedido.IdPrenda); 

        this.pedidoService.postIngresarPedidoPrenda(this.pedido).subscribe({
          next: (response) => {
            console.log("Pedido Guardado...", response);
            this.pedido = response;
          },
          error: (error) => {
            console.log("Error al guardar el pedido", error.error || error.message || error);
          }
        });
    
  }
  private resetPedido() {
    this.pedido = {
      EmpleadoId: 0,
      FechaPedido: new Date(),
      IdPrenda: 0,
      Talle: '',
      Cantidad: 0
    };
  }

  


  
}