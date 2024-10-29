import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  exports:[
    MenuModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    ReactiveFormsModule,
    DropdownModule,
  ]
})
export class PrimeNGModule { }
