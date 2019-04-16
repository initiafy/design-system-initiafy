import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNoDialogComponent } from './yes-or-no/yes-or-no.component';
import { YesOrNoService } from './yes-or-no.service';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { InitiafyIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    YesOrNoDialogComponent
  ],
  imports: [
    CommonModule,
    InitiafyIconModule,
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
