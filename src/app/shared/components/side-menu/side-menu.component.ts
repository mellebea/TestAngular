import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {
  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: 'empleados/list' },
    { label: 'Listado de Prendas Pedidas', icon: 'label', url: 'empleados/prendasPedidas' },
    { label: 'Listado de Prendas', icon: 'label', url: 'empleados/listPrenda' },
    { label: 'Añadir', icon: 'add', url: 'empleados/newEmpleado' },
    { label: 'Hacer Pedido', icon: 'pi-cart-arrow-down', url: 'empleados/pedidos' },
    { label: 'Usuario', icon: 'pi-user', url: 'auth/usuario' },
  ]
}
