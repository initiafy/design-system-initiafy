import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNoDialogComponent, YesOrNoDialogData } from './yes-or-no/yes-or-no.component';
import { YesOrNoService } from './yes-or-no.service';
import { MatIconModule, MatButtonModule, MatDialogModule, MatDialogRef } from '@angular/material';

@NgModule({
  declarations: [
    YesOrNoDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    YesOrNoDialogComponent
  ],
  providers: [
    YesOrNoService
  ],
  entryComponents: [
    YesOrNoDialogComponent
  ]
})
export class InitiafyYesOrNoModule { }

export { YesOrNoDialogData };
