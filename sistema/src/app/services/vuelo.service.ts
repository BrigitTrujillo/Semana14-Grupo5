import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelo } from '../models/vuelo';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class VueloService {
  url = 'http://localhost:4000/api/productos/';

  constructor(private http: HttpClient) { }

  generatePDF(numero: string, origen: string, destino: string, fecha: string) {
    const doc = new jsPDF.default();

    // Create the content of the report in table format
    const tableContent = [
      ['Numero-Vuelo', 'Origen', 'Destino', 'Fecha'],
      [numero, origen, destino, fecha]
    ];

    // Set table style
    const tableStyles = {
      fontSize: 12,
      fontStyle: 'bold',
      halign: 'center',
      fillColor: [52, 73, 94],
      textColor: [255, 255, 255]
    };

    // Add content to the document PDF
    doc.text('Ingreso de vuelo', 10, 10);
  

   
  }

  getVuelos(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteVuelo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarVuelo(vuelo: Vuelo): Observable<any> {
    return this.http.post(this.url, vuelo);
  }

  viewVuelo(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarVuelo(id: string, vuelo: Vuelo): Observable<any> {
    return this.http.put(this.url + id, vuelo);
  }
}
