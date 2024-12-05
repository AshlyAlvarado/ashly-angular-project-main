import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import * as moment from 'moment';

@Component({
  selector: 'app-form-control-carga',
  standalone: true,
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    NgxMatTimepickerModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerToggle 
  ],
  templateUrl: './form-control-carga.component.html',
  styleUrl: './form-control-carga.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class FormControlCargaComponent {
  barcos = ['Balsa 88', 'HASkleanar', 'Patagonia', 'Macondo'];
    viajes = ['V24k7', 'M345h', '7T00B'];


    formData = {
      barco: '',
      numeroViaje: '',
      fechaDt: Date, 
      fechaInicio: '',
      horaInicio: ''
    };

    onSubmit() {
      console.log(this.formData);
    }

    ngOnInit(): void {
      
      console.log(moment().format('DD/MM/YYYY')); // Debería mostrar la fecha en el formato correcto

    }

}
