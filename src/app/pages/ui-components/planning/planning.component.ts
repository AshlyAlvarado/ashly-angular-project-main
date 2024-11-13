import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MaterialService } from 'src/app/services/material.service';

@Component({
  selector: 'app-planning',
  standalone: true,
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss'],
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class PlanningComponent implements OnInit {
  materials: any[] = [];
  displayedColumns1: string[] = ['nombre', 'meta']; // Columnas a mostrar

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
    this.materialService.getMaterials().subscribe((response) => {
      this.materials = response.Data;
    });
  }
}
