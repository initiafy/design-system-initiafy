import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SnackBarService } from './snack-bar.service';
import { MatSnackBarModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [SnackBarService],
  entryComponents: [SnackBarComponent]
})
export class InitiafySnackBarModule { }
