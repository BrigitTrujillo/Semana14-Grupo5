import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pilotos',
  templateUrl: './editar-pilotos.component.html',
  styleUrls: ['./editar-pilotos.component.css']
})
export class EditarPilotosComponent implements OnInit {
  listPilotos: any[] = []; // Propiedad listPilotos inicializada como un array vacío

  constructor() { }

  ngOnInit() {
    // Lógica de inicialización aquí si es necesario
  }

  eliminarPiloto(pilotoId: string) {
    // Lógica para eliminar el piloto con el ID proporcionado
  }
}
