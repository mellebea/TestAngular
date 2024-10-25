import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';



@NgModule({
  exports:[
    MenuModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    
  ]
})
export class PrimeNGModule { }
