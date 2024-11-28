import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { CUSTOM_DATE_FORMATS } from './customDateFormats';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,  // Agrega HttpClientModule aquí
    MatMomentDateModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter }, // Configura Moment como adaptador
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, // Cambia el idioma si es necesario
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }, // Aplica los formatos personalizados
  ],
})
export class AppModule { }
