import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { LoginComponent } from './pages/users/login/login.component';
import { VuelosComponent } from './pages/vuelo/vuelos/vuelos.component';
import { CrearVueloComponent } from './pages/vuelo/crear-vuelo/crear-vuelo.component';
import { EditarVueloComponent } from './pages/vuelo/editar-vuelo/editar-vuelo.component';
import { EliminarVueloComponent } from './pages/vuelo/eliminar-vuelo/eliminar-vuelo.component';

const routesInicio: Routes = [
  { path: '', component: LoginComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'crear-productos', component: CrearProductosComponent },
  { path: 'vuelos', component: VuelosComponent },
  { path: 'crear-vuelo', component: CrearVueloComponent },
  { path: 'editar-vuelo', component: EditarVueloComponent },
  { path: 'eliminar-vuelo', component: EliminarVueloComponent },

  { path: 'editar-producto/:id', component: EditarProductosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routesInicio)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
