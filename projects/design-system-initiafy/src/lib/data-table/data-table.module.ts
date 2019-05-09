import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiafyDataTableComponent } from './data-table/data-table.component';
import {
  MatIconModule,
  MatCheckboxModule,
  MatMenuModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatTableModule,
  MatInputModule
} from '@angular/material';
import { InitiafyButtonModule } from '../button/button.module';
import { ResizeableDirective } from './data-table/resizeable.directive';

@NgModule({
  declarations: [InitiafyDataTableComponent, ResizeableDirective],
  imports: [
    CommonModule,
    InitiafyButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [InitiafyDataTableComponent]
})
export class InitiafyDataTableModule { }
