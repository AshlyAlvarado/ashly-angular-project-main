import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [],
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  @Input() formData: any;

  calcularFactorAjuste() {
    // Aquí agregarás la lógica de cálculos como en React
    return {};
  }
}
