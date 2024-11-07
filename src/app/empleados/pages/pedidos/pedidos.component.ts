
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Empleado } from '../../interfaces/empleados.interface';
import { Prenda } from '../../interfaces/prenda';
import { PrendasPedidas } from './../../interfaces/prendasPedidas.interface';
import { HacerPedidoPrendaService } from '../../services/hacer-pedido-prenda.service';


import { GetEmpleado } from '../../services/get-empleado.service';
import { ToastrService } from 'ngx-toastr';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../interfaces/pedido';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: ``
})



export class PedidosComponent  implements OnInit  {

  //Objeto que recibe los datos del empleado seleccionado desde la tabla de lista de empleados
  public empleadoSeleccionado: Empleado | null = null;
  
  //Objeto para cargar el dropBox pera mostrar las prendas a seleccionar
  prendas: Prenda[] = [];  // Cargar desde API
  
  //Array para guarda varias prendas para un mismo pedido por empleado
  ListaPrendaPedida:any[]=[]; 
  
  //Inicializacion de modelo para ingresar los datos a la base de datos
  pedido: PrendasPedidas ={
    EmpleadoId: 0,
    FechaPedido : new Date(),
    IdPrenda: 0,
    Talle:    '',
    Cantidad: 0
  };

  prendaSeleccionada = {
    PrendaId: 0,
    Talle: '',
    Cantidad: 0
  };


  

  constructor(private router: Router, 
              private getEmpleado:GetEmpleado,private toastr: ToastrService,
              private pedidoConPrenda:PedidoService){}
 

  ngOnInit():void{
    this.ObtenerPrendas();
    this.EmpleadoSeleccionado();
  }

  EmpleadoSeleccionado(){
    this.empleadoSeleccionado = this.getEmpleado.getEmpleado();
    if (this.empleadoSeleccionado) {
      this.pedido.EmpleadoId = this.empleadoSeleccionado.Id;
      console.log('Empleado seleccionado recibido:', this.empleadoSeleccionado);
    } 
    else {
      console.log('No se recibió ningún empleado seleccionado.');
    }
  }

  ObtenerPrendas()
  {
    this.pedidoConPrenda.getPrendas().subscribe(prendas=>this.prendas=prendas);
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

  agregarPrenda() {
    this.prendaSeleccionada.PrendaId=this.pedido.IdPrenda;
    this.prendaSeleccionada.Talle=this.pedido.Talle;
    this.prendaSeleccionada.Cantidad=this.pedido.Cantidad;
    
    if (this.prendaSeleccionada.PrendaId && this.prendaSeleccionada.Talle && this.prendaSeleccionada.Cantidad){
      console.log('Id prenda',this.prendaSeleccionada.PrendaId);
      console.log('Talle',this.prendaSeleccionada.Talle);
      console.log('Cantidad',this.pedido.Cantidad);
      this.ListaPrendaPedida.push({ ...this.prendaSeleccionada });
      
    }
    else {
      this.toastr.error('Completa todos los campos para agregar la prenda.');
    }

    
  }

  insertarPedido(){
    if (this.ListaPrendaPedida.length === 0) {
      this.toastr.error('No se puede guardar un pedido sin prendas.');
      return;
    }
    const pedidoCompleto = {
      EmpleadoId: this.pedido.EmpleadoId,
      FechaPedido: this.pedido.FechaPedido,
      PrendasPedidas: this.ListaPrendaPedida
    };
    console.log('pedidoCompleto',pedidoCompleto);

    this.pedidoConPrenda.postIngresarPedidoConPrenda(pedidoCompleto).subscribe({
      next: (response) => {
        this.toastr.success('Pedido realizado con éxito.');
        this.resetFormulario();
      },
      error: (error) => {
        this.toastr.error('Error al realizar el pedido.');
        console.error(error);
        console.error("Error al guardar el pedido:", error);
    if (error.error) {
      console.error("Detalle del error:", error.error);
    } else {
      console.error("Mensaje de error:", error.message);
    }
    this.toastr.error('Error al guardar el pedido...', 'Error');
      }
    });
    

    
  }

    resetFormulario() {
      this.ListaPrendaPedida = [];
      this.pedido = {
        EmpleadoId: this.empleadoSeleccionado?.Id || 0,
        FechaPedido: new Date(),
        IdPrenda: 0,
        Talle: '',
        Cantidad: 0
      };
    }
    
}