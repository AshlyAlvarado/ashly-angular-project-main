import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})

export class WeatherListComponent implements OnInit {
  // @Input() programacionData: any;
  // @Input() weatherData: any;
  @Input() parametros: any; // Aquí recibes los parámetros ingresados por el usuario
  displayedColumns: string[] = ['numeroHoras', 'fecha', 'hora', 'toneladasProyectadas', 'toneladasRestantes', 'lluvia'];
  dataSource: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    // Simulación del llamado al backend (reemplaza esto con tu servicio real)
    const datos = [
      { fecha: '2024-12-01', hora: '14:30', toneladasProyectadas: 25.5, toneladasRestantes: 10.25, lluvia: 5.1 },
      { fecha: '2024-12-02', hora: '15:45', toneladasProyectadas: 20.0, toneladasRestantes: 8.75, lluvia: 3.2 }
    ];

    this.dataSource = datos.map((item, index) => ({
      numeroHoras: index + 1,
      fecha: new Date(item.fecha).toLocaleDateString('es-ES'),
      hora: item.hora,
      toneladasProyectadas: item.toneladasProyectadas.toFixed(2),
      toneladasRestantes: item.toneladasRestantes.toFixed(2),
      lluvia: item.lluvia.toFixed(2),
    }));
  }

}
