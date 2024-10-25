import { Component } from '@angular/core';

@Component({
  selector: 'app-layaout-page',
  templateUrl: './layaout-page.component.html',
  styles: ``
})
export class LayaoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list' },
    { label: 'Listado de Prendas Pedidas', icon: 'label', url: './prendasPedidas' },
    { label: 'Añadir', icon: 'add', url: './newEmpleado' },
    { label: 'Hacer Pedido', icon: 'pi-cart-arrow-down', url: './pedidos' },
    { label: 'Usuario', icon: 'pi-user', url: './usuario' },
  ]
}
