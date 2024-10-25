import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  exports:[
    MenuModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    ReactiveFormsModule,
    
  ]
})
export class PrimeNGModule { }
