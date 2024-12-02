import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { ProyeccionService } from 'src/app/services/proyeccion.service';

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
  horasParoPorLluvia: number=0;
  // @Input() programacionData: any;
  // @Input() weatherData: any;
  @Input() parametros: any; // Aquí recibes los parámetros ingresados por el usuario
  displayedColumns: string[] = ['numeroHoras', 'fecha', 'hora', 'toneladasHora', 'toneladasRestantes', 'clima'];
  dataSource: any[] = [];

  constructor(private proyeccionService: ProyeccionService ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    // Simulación del llamado al backend (reemplaza esto con tu servicio real)
    const payload = {
      tipoOperacion: 'importacion',
      material: 'Carbon',
      toneladasTotales: 15000,
      fechaArribo: '2024-12-01',
      horaArribo: '14:45'
    };

    this.proyeccionService.postProyeccionBarco(payload).subscribe({
      next: (response) => {
        console.log(response); // Verifica la respuesta en consola

        this.dataSource = response.data.resultados.map((item: any, index: number) => ({
          numeroHoras: index + 1,
          fecha: new Date (item.fecha).toLocaleDateString('es-HN'),
          hora: new Date (item.fecha).toLocaleTimeString('en-GB'),
          toneladasHora: item.toneladasHora.toFixed(2),
          toneladasRestantes: item.toneladasRestantes.toFixed(2),
          clima: item.clima.toFixed(2),
        }));
        this.horasParoPorLluvia = response.data.horasParoPorLluvia;
      },
      error: (err) => {
        console.error('Error al consumir el API:', err);
      }
    });
  }

}
