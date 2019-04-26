import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar.component';
import { InitiafyIconModule } from '../icon/icon.module';
import { InitiafyButtonModule } from '../button/button.module';

@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule,
    InitiafyIconModule,
    InitiafyButtonModule
  ],
  exports: [SnackBarComponent]
})
export class InitiafySnackBarModule { }
