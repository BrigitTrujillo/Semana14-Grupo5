import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-vuelos',
  templateUrl: './crear-vuelos.component.html',
  styleUrls: ['./crear-vuelos.component.css']
})
export class CrearVuelosComponent implements OnInit {
  vueloForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.vueloForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      numero: ['', Validators.required],
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fecha: ['', Validators.required],
      // Agrega más campos según sea necesario
    });
  }

  ngOnInit() {
    // Puedes dejar el método ngOnInit() vacío o agregar lógica adicional si es necesario
  }

  agregarVuelo() {
    // Lógica para agregar un vuelo
  }
}
