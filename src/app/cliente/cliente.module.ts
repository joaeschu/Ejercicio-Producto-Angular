import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteMainComponent } from './cliente-main/cliente-main.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FormsModule } from '@angular/forms';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { RouterModule } from '@angular/router';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoMainComponent } from './producto-main/producto-main.component';



@NgModule({
  declarations: [
    ClienteMainComponent,
    ClienteFormComponent,
    ClienteDetailComponent,
    ProductoDetailComponent,
    ProductoFormComponent,
    ProductoMainComponent
  ],
  exports:[
    ClienteMainComponent,
    ClienteFormComponent,
    ClienteDetailComponent,
    ProductoDetailComponent,
    ProductoFormComponent,
    ProductoMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ClienteModule { }
