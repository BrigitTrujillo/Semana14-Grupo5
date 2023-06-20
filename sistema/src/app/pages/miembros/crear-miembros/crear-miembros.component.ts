import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-miembros',
  templateUrl: './crear-miembros.component.html',
  styleUrls: ['./crear-miembros.component.css']
})
export class CrearMiembrosComponent implements OnInit {
  miembroForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.miembroForm = this.formBuilder.group({
      // Define los campos del formulario aquí
      // ...
    });
  }

  ngOnInit() {
    // Lógica de inicialización aquí si es necesario
  }

  agregarMiembro() {
    // Lógica para agregar un miembro
    // ...
  }
}
