import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { EmpleadoPrendaPedidoService } from '../../services/empleado-prenda-pedido.service';
import { PrendasEntregadas } from '../../interfaces/PrendasEntrgadas.interface';
import { PrendasService } from '../../services/prendas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-entregados',
  templateUrl: './pedidos-entregados.component.html',
  styles: ``
})
export class PedidosEntregadosComponent implements OnInit{

  public prendaEntregada : PrendasEntregadas []=[];
  public nombreFiltro: string = '';
  public apellidoFiltro: string = '';
  
  first = 0;
  rows = 10;

  constructor(private prendaEntregadaService:PrendasService, private router: Router){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  filtrarPrendasEntregadas() {
    this.prendaEntregadaService.filtrarPrendasEntregadas(this.nombreFiltro, this.apellidoFiltro).subscribe(
      prendaEntregada => {
        this.prendaEntregada = prendaEntregada;
      },
      error => {
        console.error('Error al filtrar Prendas Pedidas:', error);
      }
    );
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

pageChange(event:any) {
    this.first = event.first;
    this.rows = event.rows;
}

isLastPage(): boolean {
  return this.prendaEntregada ? this.first === this.prendaEntregada.length - this.rows : true;
}

isFirstPage(): boolean {
  return this.prendaEntregada ? this.first === 0 : true;
}
  

}
