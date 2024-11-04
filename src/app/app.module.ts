import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { RegistrePageComponent } from './auth/pages/registre-page/registre-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { LayoutPageComponent } from './auth/pages/layout-page/layout-page.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PedidosComponent } from './empleados/pages/pedidos/pedidos.component';
import { PedidosEntregadosComponent } from './empleados/pages/pedidos-entregados/pedidos-entregados.component';
import { PrendasPedidasComponent } from './empleados/pages/prendas-pedidas/prendas-pedidas.component';
import { LayaoutPageComponent } from './empleados/pages/layaout-page/layaout-page.component';
import { MaterialModule } from './material/material.module';
import { ListPageComponent } from './empleados/pages/list-page/list-page.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './empleados/pages/registro/registro.component';
import { ListadoPrendasComponent } from './empleados/pages/listado-prendas/listado-prendas.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404PageComponent,
    RegistrePageComponent,
    LoginPageComponent,
    LayoutPageComponent,
    PedidosComponent,
    PedidosEntregadosComponent,
    PrendasPedidasComponent,
    LayaoutPageComponent,
    ListPageComponent,
    RegistroComponent,
    ListadoPrendasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    PrimeNGModule,
    ButtonModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
