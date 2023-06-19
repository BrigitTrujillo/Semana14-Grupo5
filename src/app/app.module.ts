import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/users/login/login.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './pages/productos/crear-productos/crear-productos.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { VerProductoComponent } from './pages/productos/ver-producto/ver-producto.component';
import { EditarProductosComponent } from './pages/productos/editar-productos/editar-productos.component';
import { VuelosComponent } from './pages/vuelos/vuelos.component';
import { AvionComponent } from './pages/avion/avion.component';
import { CrearVueloComponent } from './pages/vuelo/crear-vuelo/crear-vuelo.component';
import { ListarVueloComponent } from './pages/vuelo/listar-vuelo/listar-vuelo.component';
import { EditarVueloComponent } from './pages/vuelo/editar-vuelo/editar-vuelo.component';
import { ElimiarVueloComponent } from './pages/vuelo/elimiar-vuelo/elimiar-vuelo.component';
import { EliminarVueloComponent } from './pages/vuelo/eliminar-vuelo/eliminar-vuelo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    ListarProductosComponent,
    CrearProductosComponent,
    NavbarComponent,
    VerProductoComponent,
    EditarProductosComponent,
    VuelosComponent,
    AvionComponent,
    CrearVueloComponent,
    ListarVueloComponent,
    EditarVueloComponent,
    ElimiarVueloComponent,
    EliminarVueloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
