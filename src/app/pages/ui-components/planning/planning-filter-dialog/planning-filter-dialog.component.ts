import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

export interface PlanningFilterDialogData {
    operationType: string;
    material: string;
    shipName: string;
    journeyNumber: string;
    operatingTons: number;
    operatingStartDate: Date;
    operatingStartHour: number;
}

@Component({
    selector: 'app-planning-filter-dialog',
    templateUrl: './planning-filter-dialog.component.html',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
      ],
    styleUrl: './planning-filter-dialog.component.scss'
})
export class PlanningFilterDialogComponent implements OnInit {

    operationType = [
        { value: 'importacion', viewValue: 'Importacion' },
        { value: 'exportacion', viewValue: 'Exportacion' },
      ];

      selectedOperationType = this.operationType[0].value;

    constructor(
        private dialogRef: MatDialogRef<PlanningFilterDialogComponent>,
    ) {
    }

    static open(
        dialog: MatDialog
    ): MatDialogRef<PlanningFilterDialogComponent> {
        return dialog.open<PlanningFilterDialogComponent>(
            PlanningFilterDialogComponent, {
            width: '900px',
            autoFocus: true
        });
    }

    ngOnInit(): void {
        console.log('');
    }

    onSubmit(): void {
        this.dialogRef.close('prueba de cierre')
    }

    cancel(): void {
        this.dialogRef.close();
    }
}
