import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Vuelo } from 'src/app/models/vuelo';

import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-vuelo.component.html',
  styleUrls: ['./editar-vuelo.component.css']
})

export class EditarvueloComponent implements OnInit {
  vueloForm: FormGroup;
  id: string | null; 
  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
              private router: Router,
              private _vueloService: ProductoService){
    this.vueloForm = this.fb.group({
        numero: ['', Validators.required],
        origen: ['', Validators.required],
        destino: ['', Validators.required],
        fecha: ['', Validators.required]
    })
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    
    this.validarId()

  }

  validarId(){

    if(this.id !== null){
      this._vueloService.viewProducto(this.id).subscribe(data => {
        this.vueloForm.setValue({
          numero: data.numero,
          origen: data.origen,
          destino: data.destino,
          fecha: data.fecha
        })
      })
    }

  }

  editarVuelo(){
    
    const PRODUCTO: Vuelo = {
      numero: this.vueloForm.get('numero')?.value,
      origen: this.vueloForm.get('origen')?.value,
      destino: this.vueloForm.get('destino')?.value,
      fecha: this.vueloForm.get('fecha')?.value,
    }

    Swal.fire({
          title: 'Actualizacion de VUELO',
          text: "¿Desea actualizar el vuelo?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            if(this.id !== null){
              this._vueloService.actualizarProducto(this.id, VUELO).subscribe(data => {
                  console.log(VUELO);
                  this.router.navigate(['/listar-vuelo']) 
              })
            }
          }
        })
    
           
  }

}
