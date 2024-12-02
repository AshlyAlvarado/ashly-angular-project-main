import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InputFormComponent } from './pages/ui-components/planning/input-form/input-form.component';
import { WeatherListComponent } from './pages/ui-components/planning/weather-list/weather-list.component';
import { ProyeccionComponent } from './pages/ui-components/planning/proyeccion/proyeccion.component';

@NgModule({
  declarations: [
    InputFormComponent,
    WeatherListComponent,
    ProyeccionComponent
  ],
  imports: [
    HttpClientModule,  // Agrega HttpClientModule aquí
   
  ],
  providers: [
    
  ],
})
export class AppModule { }
