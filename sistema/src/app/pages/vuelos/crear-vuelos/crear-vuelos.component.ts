import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vuelo } from 'src/app/models/vuelo';
import { VueloService } from 'src/app/services/vuelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-vuelos',
  templateUrl: './crear-vuelos.component.html',
  styleUrls: ['./crear-vuelos.component.css']
})
export class CrearVuelosComponent {

  vueloForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private _vueloService: VueloService) {
    this.vueloForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      num_vuelo: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fecha: ['', Validators.required],
      // Agrega más campos según sea necesario
    });
  }

  agregarVuelo() {
    // Lógica para agregar un vuelo
    const VUELO: Vuelo = {
      num_vuelo: this.vueloForm.get('num_vuelo')?.value,
      origen: this.vueloForm.get('origen')?.value,
      destino: this.vueloForm.get('destino')?.value,
      fecha: this.vueloForm.get('fecha')?.value,
    }

    Swal.fire({
      title: 'Creacion de Producto',
      text: "¿Desea crear el producto?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._vueloService.guardarVuelo(VUELO).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-vuelos'])
        }) 
      }
    })
  }
}
