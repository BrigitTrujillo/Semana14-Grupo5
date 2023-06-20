import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-miembros',
  templateUrl: './editar-miembros.component.html',
  styleUrls: ['./editar-miembros.component.css']
})
export class EditarMiembrosComponent implements OnInit {
  listMiembros: any[] = []; // Propiedad listPilotos inicializada como un array vacío

  constructor() { }

  ngOnInit() {
    // Lógica de inicialización aquí si es necesario
  }

  eliminarMiembro(pilotoId: string) {
    // Lógica para eliminar el piloto con el ID proporcionado
  }
}
