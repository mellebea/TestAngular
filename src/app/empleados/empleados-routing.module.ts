
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutPageComponent } from './pages/layaout-page/layaout-page.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { PedidosEntregadosComponent } from './pages/pedidos-entregados/pedidos-entregados.component';
import { PrendasPedidasComponent } from './pages/prendas-pedidas/prendas-pedidas.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { LoginPageComponent } from '../auth/pages/login-page/login-page.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ListadoPrendasComponent } from './pages/listado-prendas/listado-prendas.component';

const routes: Routes = [
  {
    path:'',
    component:LayaoutPageComponent,
    children:[
      {path:'list',component:ListPageComponent},
      {path:'pedidos',component:PedidosComponent},
      {path:'pedidosEntregados',component:PedidosEntregadosComponent},
      {path:'prendasPedidas',component:PrendasPedidasComponent},
      {path:'newEmpleado',component:RegistroComponent},
      {path:'usuario',component:LoginPageComponent},
      {path:'listPrenda',component:ListadoPrendasComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
