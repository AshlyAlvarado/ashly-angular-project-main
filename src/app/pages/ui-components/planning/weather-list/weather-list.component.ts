import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [],
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css'],
})
export class WeatherListComponent {
  @Input() tipoOperacion: string = '';
  @Input() material: string = '';
  @Input() clima: any = {}; // Ajustar según la estructura de datos del clima
  @Input() toneladasTotales: number = 0;
  @Input() metasPorMaterial: any = {}; // Ajustar según la estructura de metas
  @Input() toneladasRestantes: number = 0;
  @Input() horaActual: string = '';

  ajustesPorMaterial: any = {
    importacion: {
      Carbon: [[0, 0.4, 1], [0.4, 0.9, 0.7], [0.9, 1.2, 0.5], [1.2, 1.5, 0.2], [1.5, Infinity, 0]],
      Petcoke: [[0, 0.4, 1], [0.4, 0.9, 0.7], [0.9, 1.2, 0.5], [1.2, 1.5, 0.2], [1.5, Infinity, 0]],
      Fertilizante: [[0, 0.1, 1], [0.1, Infinity, 0]],
      Fluorita: [[0, 0.1, 1], [0.1, 0.4, 0.7], [0.4, 0.5, 0.5], [0.5, Infinity, 0]],
      Sal: [[0, 0.2, 1], [0.2, 0.5, 0.7], [0.5, 0.9, 0.6], [0.9, Infinity, 0]],
      otro: [[0, 0.4, 1], [0.4, 0.9, 0.7], [0.9, 1.2, 0.5], [1.2, 1.5, 0.2], [1.5, Infinity, 0]],
    },
    exportacion: {
      "Concentrado de Plomo": [[0, 0.2, 1], [0.2, 0.9, 0.7], [0.9, Infinity, 0]],
      "Concentrado de Zinc": [[0, 0.2, 1], [0.2, 0.9, 0.7], [0.9, Infinity, 0]],
      "Agregados carga directa desde (Agrecasa)": [[0, 0.3, 1], [0.3, 0.9, 0.9], [0.9, 1.5, 0.7], [1.5, 2, 0.5], [2, Infinity, 0]],
      "Agregados carga directa desde (Puntos de acopio)": [[0, 0.3, 1], [0.3, 0.9, 0.9], [0.9, 1.5, 0.7], [1.5, 2, 0.5], [2, Infinity, 0]],
      "Agregados carga directa desde (Chiquita)": [[0, 0.3, 1], [0.3, 0.9, 0.9], [0.9, 1.5, 0.7], [1.5, 2, 0.5], [2, Infinity, 0]],
      otro: [[0, 0.3, 1], [0.3, 0.9, 0.9], [0.9, 1.5, 0.7], [1.5, 2, 0.5], [2, Infinity, 0]],
    },
  };

  calcularFactorAjuste() {
    const ajustes = this.ajustesPorMaterial[this.tipoOperacion]?.[this.material];
    if (!ajustes) {
      console.error('Material o tipo de operación inválido');
      return null;
    }

    const toneladasRestantesRatio = this.toneladasRestantes / this.toneladasTotales;
    for (const ajuste of ajustes) {
      const [min, max, factor] = ajuste;
      if (toneladasRestantesRatio >= min && toneladasRestantesRatio < max) {
        return factor;
      }
    }

    return 0; // Factor por defecto
  }
}
