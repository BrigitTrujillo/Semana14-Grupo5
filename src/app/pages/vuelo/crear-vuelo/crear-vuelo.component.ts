import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VueloService } from 'src/app/services/vuelo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


import { Vuelo } from 'src/app/models/vuelo';
@Component({
  selector: 'app-crear-vuelo',
  templateUrl: './crear-vuelo.component.html',
  styleUrls: ['./crear-vuelo.component.css']
})
export class CrearvueloComponent {

  productoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _vueloService: VueloService){
    this.productoForm = this.fb.group({
        numero:  ['', Validators.required],
        prigen: ['', Validators.required],
        destino: ['', Validators.required],
        fecha:    ['', Validators.required]
    })
  }
  agregarVuelo(){

    const VUELO: Vuelo = {
      numero: this.productoForm.get('numero')?.value,
      origen: this.productoForm.get('origen')?.value,
      destino: this.productoForm.get('destino')?.value,
      fecha: this.productoForm.get('fecha')?.value,
    }

    console.log(VUELO)

    Swal.fire({
      title: 'Creacion de de vuelo',
      text: "¿Desea crear el vuelo?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._vueloService.guardarProducto(VUELO).subscribe(data =>{
          console.log(data);  
          this.router.navigate(['/listar-vuelo'])
        }) 
      }
    })

    
  }

    //console.log(this.productoForm)
  

}
