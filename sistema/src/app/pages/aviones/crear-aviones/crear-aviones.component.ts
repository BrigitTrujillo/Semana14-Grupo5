import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-aviones',
  templateUrl: './crear-aviones.component.html',
  styleUrls: ['./crear-aviones.component.css']
})
export class CrearAvionesComponent implements OnInit {
  avionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.avionForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      // ...
    });
  }

  ngOnInit() {
    // Lógica de inicialización aquí si es necesario
  }

  agregarAvion() {
    // Lógica para agregar un avión
    // ...
  }
}
