
import { Component, OnInit, NgModule } from '@angular/core';
import { EmpleadoPrendaPedidoService } from '../../services/empleado-prenda-pedido.service';
import { EmpleadoPrendaPedida } from '../../interfaces/empleadoPrendaPedida.interface';

@Component({
  selector: 'app-prendas-pedidas',
  templateUrl: './prendas-pedidas.component.html',
  styles: ``
})
export class PrendasPedidasComponent {

  //Declaro una variable para cargar los datos que devuelve el metodo
  ListaEmpleadoPrendaPedido : EmpleadoPrendaPedida[]=[]

  displayedColumns: string[] = ['fechaPedido','nombre', 'apellido', 'cantidad', 'nombrePrenda' ];  // Definir las columnas visibles

 //Inyectar el servicio
 constructor (private _serviceEmpleadoPrendaPedido: EmpleadoPrendaPedidoService) {};

 ngOnInit(): void {
   this.ObtenerListadoEmpleadoPrendaPedida()
 }

 ObtenerListadoEmpleadoPrendaPedida()
 {
   this._serviceEmpleadoPrendaPedido.getListEmpleadoPrendaPedida()
                                    .subscribe(data=>{
                                     console.log(data);
                                     this.ListaEmpleadoPrendaPedido=data;
                                    },
                                   error=>{
                                     console.log(error);
                                   })
 } 
  
  }

  
