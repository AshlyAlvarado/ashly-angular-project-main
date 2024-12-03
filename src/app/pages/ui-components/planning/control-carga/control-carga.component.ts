import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import * as moment from 'moment';

@Component({
  selector: 'app-control-carga',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './control-carga.component.html',
  styleUrl: './control-carga.component.scss'
})
export class ControlCargaComponent implements OnChanges {
  @Input() parametros: any;

  displayedColumns: string[] = [
    'fecha', 'hora', 'promedioPorCamion', 'camionesIngresados', 'camionesDescargados',
    'camionesPendientes', 'camionesEnPredio', 'meta', 'toneladasCargadas',
    'diferencia', 'cumplimientoMeta', 'justificacion'
  ];

  // Datos iniciales
  dataSource = [
    {
      fecha: '30/11/2024',
      hora: '18:00',
      promedioPorCamion: 166.66,
      camionesIngresados: 20,
      camionesDescargados: 5,
      camionesPendientes: 5,
      camionesEnPredio: 5,
      meta: 2000,
      toneladasCargadas: 2500,
      diferencia: 500,
      cumplimientoMeta: 'Sí cumple',
      justificacion: ''
    }
  ];
  constructor() {  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  // Método para agregar nueva fila
  agregarNuevaFila() {
    const ultimaFila = this.dataSource[this.dataSource.length - 1];
    const fechaHoraActual = moment(`${ultimaFila.fecha} ${ultimaFila.hora}`, 'DD/MM/YYYY HH:mm').add(1, 'hour');

    const nuevaFila = {
      fecha: fechaHoraActual.format('DD/MM/YYYY'),
      hora: fechaHoraActual.format('HH:mm'),
      promedioPorCamion: 0,
      camionesIngresados: 0,
      camionesDescargados: 0,
      camionesPendientes: ultimaFila.camionesPendientes,
      camionesEnPredio: ultimaFila.camionesPendientes,
      meta: 2000,
      toneladasCargadas: 0,
      diferencia: 0,
      cumplimientoMeta: '',
      justificacion: ''
    };
    this.dataSource = [...this.dataSource, nuevaFila]; // Actualiza la tabla
  }

  calcularValores(row: any, index: number) {
    // Fila anterior si existe
    const previousRow = index > 0 ? this.dataSource[index - 1] : { camionesPendientes: 0 };
    // Calcular camiones en predio
    row.camionesEnPredio = row.camionesIngresados + previousRow.camionesPendientes;
    // Calcular camiones pendientes
    row.camionesPendientes = row.camionesEnPredio - row.camionesDescargados;
    // Calcular promedio por camión
    row.promedioPorCamion = row.camionesDescargados > 0 ? row.toneladasCargadas / row.camionesDescargados : 0;
    // Calcular diferencia
    row.diferencia = row.toneladasCargadas - row.meta;
    // Calcular cumplimiento
    row.cumplimientoMeta = row.diferencia >= 0 ? 'Sí cumple' : 'No cumple';
  }

  
  // recalcularFila(index: number) {
  //   const row = this.dataSource[index];
  //   const previousRow = index > 0 ? this.dataSource[index - 1] : { camionesPendientes: 0 };

  //   row.promedioPorCamion = row.camionesDescargados > 0 ? row.toneladasCargadas / row.camionesDescargados : 0;
  //   row.camionesPendientes = row.camionesEnPredio - row.camionesDescargados;
  //   row.camionesEnPredio = row.camionesIngresados + previousRow.camionesPendientes;
  //   row.diferencia = row.toneladasCargadas - row.meta;
  //   row.cumplimientoMeta = row.diferencia >= 0 ? 'Sí cumple' : 'No cumple';
  // }

}
