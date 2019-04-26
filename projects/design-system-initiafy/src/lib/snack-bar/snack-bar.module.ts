import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar.component';
import { MatSnackBarModule } from '@angular/material';
import { InitiafyIconModule } from '../icon/icon.module';
import { InitiafyButtonModule } from '../button/button.module';

@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    InitiafyIconModule,
    InitiafyButtonModule
  ]
})
export class InitiafySnackBarModule { }
