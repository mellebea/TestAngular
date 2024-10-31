import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  exports:[
    MenuModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    ToastModule,

  ],
  providers: [MessageService], // Agrega MessageService aquí
})
export class PrimeNGModule { }
