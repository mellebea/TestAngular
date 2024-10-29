import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MenuComponent,
    SideMenuComponent,
    
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    MaterialModule,
    RouterModule,
    
  ],
  exports:[
    MenuComponent,
    SideMenuComponent,
  ]
})
export class SharedModule { }
