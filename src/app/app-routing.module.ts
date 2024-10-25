import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'empleados',
    loadChildren:()=>import('./empleados/empleados.module').then(m=>m.EmpleadosModule),
  },
  {
    path: '',
    redirectTo: 'empleados',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  },
  {
    path:'404',
    component:Error404PageComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
