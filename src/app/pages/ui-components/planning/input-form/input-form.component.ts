import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialService } from 'src/app/services/material.service';
import * as moment from 'moment';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatHint,
    MatDatepickerToggle,
    MatNativeDateModule, // Importa el módulo necesario para el adaptador
    MatInputModule,
    MatButtonModule,
    NgxMatTimepickerModule
  ],
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  providers: [provideNativeDateAdapter()]
})

export class InputFormComponent implements OnInit {

  @Output() formSubmitted = new EventEmitter<any>();
    
  constructor(private materialService: MaterialService,
    private dateAdapter: DateAdapter<any>) {
    this.dateAdapter.setLocale('es-HN'); // Configura el locale español
  }

  tiposOperacion: any[] = [
    {tipo:'importacion', descripcion:'Importación'},
    {tipo:'exportacion', descripcion:'Exportación'}
  ]
  formData = {
    tipoOperacion: '',
    material: '',
    barco: '',
    numViaje: '',
    toneladasTotales: null as number | null,  // Permite tanto null como number,
    fechaDt: Date, 
    fechaArribo: '', // O usa Date si no estás utilizando Moment.js
    horaArribo: '' // Almacena la hora seleccionada
  };

  tipoOperacion = '';
  materiales: any[] = [];
  

  ngOnInit(): void {
    this.materialService.getMaterials().subscribe((response) => {
      //this.items = Array.isArray(data) ? data : [];
      this.materiales = Array.isArray(response.Data) ? response.Data : [];
      console.log(this.materiales)
      console.log(moment().format('DD/MM/YYYY')); // Debería mostrar la fecha en el formato correcto

    });
  }

  convertToNumber(value: string) {
    this.formData.toneladasTotales = parseFloat(value) || 0; // Convierte el valor o asigna 0 si no es un número válido
  }

  trackById(index: number, item: { id: number; nombre: string }): number {
    return item.id;
  }

  // onTipoOperacionChange(event: any) {
  //   const operacion = event.target.value;
  //   this.tipoOperacion = operacion === "" ? operacion;
  //   this.materiales = this.materialesPorOperacion[operacion] || [];
  //   this.formData.tipoOperacion = operacion;
  // }

  // onInputChange(event: any) {
  //   const { name, value } = event.target;
  //   this.formData[name as keyof typeof this.formData] = value;
  // }
  enviarDatos(): void {
    // Emitir los datos al componente padre
    this.formData.fechaArribo = moment(this.formData.fechaDt.toString()).format('YYYY-MM-DD');
    this.formSubmitted.emit(this.formData);
  }

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
    this.enviarDatos();
  }
}
