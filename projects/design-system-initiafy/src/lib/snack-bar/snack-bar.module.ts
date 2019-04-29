import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SnackBarService } from './snack-bar.service';
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
  ],
  providers: [SnackBarService],
  entryComponents: [SnackBarComponent]
})
export class InitiafySnackBarModule { }
