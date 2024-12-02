import { Component } from '@angular/core';
import { InputFormComponent } from '../input-form/input-form.component';
import { WeatherListComponent } from '../weather-list/weather-list.component';

@Component({
  selector: 'app-proyeccion',
  standalone: true,
  imports: [
    InputFormComponent,
    WeatherListComponent
  ],
  templateUrl: './proyeccion.component.html',
  styleUrl: './proyeccion.component.scss',
  template: `
    <app-input-form (formSubmitted)="recibirDatos($event)"></app-input-form>
    <app-weather-list [parametros]="parametros"></app-weather-list>
  `
})
export class ProyeccionComponent {
  parametros: any;

  recibirDatos(datos: any): void {
    this.parametros = datos;
  }

}
