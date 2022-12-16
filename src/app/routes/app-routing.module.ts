import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteFormComponent } from '../cliente/cliente-form/cliente-form.component';
import { ClienteMainComponent } from '../cliente/cliente-main/cliente-main.component';
import { ProductoDetailComponent } from '../cliente/producto-detail/producto-detail.component';
import { ProductoFormComponent } from '../cliente/producto-form/producto-form.component';
import { ProductoMainComponent } from '../cliente/producto-main/producto-main.component';
import { LoginComponent } from '../usuario/login/login.component';

const routes: Routes = [

  {
    path:'',
    component:ClienteMainComponent,
    pathMatch:'full'
  },
  {
    path:'cliente/new',
    component:ClienteFormComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'cliente/edit/:id',
    component:ClienteFormComponent
  },
  {
    path:'cliente/view/:id',
    component: ClienteDetailComponent
  },
  {
    path:'producto/main',
    component:ProductoMainComponent,
  },
  {
    path:'producto/new',
    component:ProductoFormComponent
  },
  {
    path:'producto/edit/:id',
    component:ProductoFormComponent
  },
  {
    path:'producto/view/:id',
    component: ProductoDetailComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
