import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-pilotos',
  templateUrl: './crear-pilotos.component.html',
  styleUrls: ['./crear-pilotos.component.css']
})
export class CrearPilotosComponent implements OnInit {
  pilotoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.pilotoForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      hora_vuelo: ['', Validators.required],
   
      // Agrega más campos según sea necesario
    });
  }

  ngOnInit() {
    // Puedes dejar el método ngOnInit() vacío o agregar lógica adicional si es necesario
  }

  agregarPiloto() {
    // Lógica para agregar un vuelo
  }
}
