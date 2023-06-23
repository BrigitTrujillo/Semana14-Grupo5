import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vuelo } from 'src/app/models/vuelo';
import { VueloService } from 'src/app/services/vuelo.service';
import Swal from 'sweetalert2';
import { PilotoService } from 'src/app/services/piloto.service';
import { AvionService } from 'src/app/services/avion.service';
@Component({
  selector: 'app-crear-vuelos',
  templateUrl: './crear-vuelos.component.html',
  styleUrls: ['./crear-vuelos.component.css'],
})
export class CrearVuelosComponent {
  listPilotos: any[] = []; // Assuming listVuelos is an array of vuelos
  listAviones: any[] = [];
  vueloForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _vueloService: VueloService,
    private pilotoService: PilotoService,
    private avionService: AvionService
  ) {
    this.vueloForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      num_vuelo: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fecha: ['', Validators.required],
      // Agrega más campos según sea necesario
      piloto: ['', Validators.required],
      avion: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadPilotos();
    this.loadAviones();
  }

  loadPilotos() {
    this.pilotoService.getPilotos().subscribe(
      (response: any) => {
        this.listPilotos = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  loadAviones() {
    this.avionService.getAviones().subscribe(
      (response: any) => {
        this.listAviones = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  agregarVuelo() {
    // Lógica para agregar un vuelo
    const VUELO: Vuelo = {
      num_vuelo: this.vueloForm.get('num_vuelo')?.value,
      origen: this.vueloForm.get('origen')?.value,
      destino: this.vueloForm.get('destino')?.value,
      fecha: this.vueloForm.get('fecha')?.value,
      piloto: this.vueloForm.get('piloto')?.value,
      avion: this.vueloForm.get('avion')?.value,
    };

    Swal.fire({
      title: 'Creacion de Vuelo',
      text: '¿Desea crear el vuelo?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this._vueloService.guardarVuelo(VUELO).subscribe((data) => {
          console.log(data);
          this.router.navigate(['/listar-vuelos']);
        });
      }
    });
  }
}
