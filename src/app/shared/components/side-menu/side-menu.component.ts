import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {
  public sidebarItems = [
    { label: 'Listado de Empleados', icon: 'label', url: 'empleados/list' },
    { label: 'Listado de Prendas Pedidas', icon: 'label', url: 'empleados/prendasPedidas' },
    { label: 'Listado de Prendas', icon: 'label', url: 'empleados/listPrenda' },
    { label: 'Listado de P.Entregados', icon: 'label', url: 'empleados/pedidosEntregados' },
    { label: 'Añadir Empleado', icon: 'add', url: 'empleados/newEmpleado' },
    { label: 'Usuario', icon: 'pi-user', url: 'auth/usuario' },
  ]
}
