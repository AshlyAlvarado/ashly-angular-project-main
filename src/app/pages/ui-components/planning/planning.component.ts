import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';

import { PlanningFilterDialogComponent } from './planning-filter-dialog/planning-filter-dialog.component';

export interface productsData {
    id: number;
    imagePath: string;
    uname: string;
    budget: number;
    priority: string;
  }

  const PRODUCT_DATA: productsData[] = [
    {
      id: 1,
      imagePath: 'assets/images/products/dash-prd-1.jpg',
      uname: 'iPhone 13 pro max-Pacific Blue-128GB storage',
      budget: 180,
      priority: 'confirmed',
    },
    {
      id: 2,
      imagePath: 'assets/images/products/dash-prd-2.jpg',
      uname: 'Apple MacBook Pro 13 inch-M1-8/256GB-space',
      budget: 90,
      priority: 'cancelled',
    },
    {
      id: 3,
      imagePath: 'assets/images/products/dash-prd-3.jpg',
      uname: 'PlayStation 5 DualSense Wireless Controller',
      budget: 120,
      priority: 'rejected',
    },
    {
      id: 4,
      imagePath: 'assets/images/products/dash-prd-4.jpg',
      uname: 'Amazon Basics Mesh, Mid-Back, Swivel Office',
      budget: 160,
      priority: 'confirmed',
    },
  ];

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
export class PlanningComponent {
  constructor(
    private dialog: MatDialog
  ) {}

  displayedColumns1: string[] = ['n_hours', 'date', 'hours', 'tons_pro', 'tons_rest', 'rain_mm'];
  dataSource1 = PRODUCT_DATA;

  onOpenFiltersDialog(): void {
    PlanningFilterDialogComponent.open(
      this.dialog
    ).afterClosed().subscribe(result => {
      console.log('dialog closed: ', result);
    });
  }
}
