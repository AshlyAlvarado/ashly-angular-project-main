import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  selectedMaterial: '';
  formData = {
    tipoOperacion: '',
    barco: '',
    numViaje: '',
    toneladasTotales: '',
    fechaArribo: '',
    horaArribo: ''
  };

  tipoOperacion = '';
  materiales: any[] = [];

  materialesPorOperacion: Record<string, string[]> = {
    importacion: ['Carbon', 'Petcoke', 'Fertilizante', 'Sal', 'Fluorita', 'otro'],
    exportacion: ['Concentrado de Plomo', 'Concentrado de Zinc', 'Agregados carga directa desde (Agrecasa)', 'Agregados carga directa desde (Chiquita)', 'Agregados carga directa desde (Puntos de acopio)', 'otro']
  };

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
    this.materialService.getMaterials().subscribe((response) => {
      //this.items = Array.isArray(data) ? data : [];
      this.materiales = Array.isArray(response.Data) ? response.Data : [];
      console.log(this.materiales)
    });
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

  onSubmit() {
    console.log('Formulario enviado:', this.formData);
  }
}
