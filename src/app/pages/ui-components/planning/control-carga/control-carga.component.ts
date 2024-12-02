import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-control-carga',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './control-carga.component.html',
  styleUrl: './control-carga.component.scss'
})
export class ControlCargaComponent implements OnChanges {
  @Input() parametros: any;

  dataSource: any[] = [];
  displayedColumns: string[] = ['fecha', 'hora', 'promedioPorCamion', 'camionesIngresados', 'camionesPendientes', 'camionesEnPredio', 'meta', 'toneladasCargadas', 'diferencia', 'cumplimientoMeta', 'justificacion'];

  constructor() {  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

}
