
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Empleado } from '../../interfaces/empleados.interface';
import { Prenda } from '../../interfaces/prenda';
import { PrendasPedidas } from './../../interfaces/prendasPedidas.interface';
import { HacerPedidoPrendaService } from '../../services/hacer-pedido-prenda.service';

import { NavigationExtras } from '@angular/router';
import { GetEmpleado } from '../../services/get-empleado.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private pedidoService:HacerPedidoPrendaService,private router: Router, 
              private getEmpleado:GetEmpleado,private toastr: ToastrService){}
 

  ngOnInit():void{
    this.ObtenerPrendas();
    this.EmpleadoSeleccionado();
  }

  EmpleadoSeleccionado(){
    this.empleadoSeleccionado = this.getEmpleado.getEmpleado();
  if (this.empleadoSeleccionado) {
    this.pedido.EmpleadoId = this.empleadoSeleccionado.id;
    console.log('Empleado seleccionado recibido:', this.empleadoSeleccionado);
  } else {
    console.log('No se recibió ningún empleado seleccionado.');
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
          this.toastr.success('Por favor, completa todos los campos requeridos.', 'Alerta');
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
            this.toastr.success('Pedido Realizado con Exito...', 'Pedido Exitoso');
          },
          error: (error) => {
            this.toastr.success('Error al guardar el pedido...', 'Error');
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