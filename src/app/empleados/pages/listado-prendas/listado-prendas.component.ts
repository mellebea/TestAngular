import { Component } from '@angular/core';
import { Prenda } from '../../interfaces/prenda';
import { ServiceNameService } from '../../services/prendas.service';
import { HacerPedidoPrendaService } from '../../services/hacer-pedido-prenda.service';

@Component({
  selector: 'app-listado-prendas',
  templateUrl: './listado-prendas.component.html',
  styles: ``
})
export class ListadoPrendasComponent {

  public prenda:Prenda[]=[];

  displayedColumns: string[] = ['Id', 'nombrePrenda', 'Descripcion' ];  // Definir las columnas visibles

  constructor (private prendaService:HacerPedidoPrendaService){};

  ngOnInit():void{
    this.prendaService.getPrendas().subscribe(prenda=>this.prenda=prenda);
  }

}
