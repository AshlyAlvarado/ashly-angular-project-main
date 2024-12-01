import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyeccionService {
  private baseUrl = 'http://localhost:4000/api'; // Cambia por la URL de tu endpoint

  constructor(private http: HttpClient) {}

   // Método para hacer el POST
   postProyeccionBarco (payload: any): Observable<any> {
    const endpoint = `${this.baseUrl}/proyeccion`; // Cambia la ruta según corresponda
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Encabezado requerido

    return this.http.post(endpoint, payload, { headers });
  }
}


