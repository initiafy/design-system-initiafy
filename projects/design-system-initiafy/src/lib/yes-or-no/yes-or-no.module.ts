import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNoDialogComponent } from './yes-or-no.component';
import { InitiafyIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    YesOrNoDialogComponent
  ],
  imports: [
    CommonModule,
    InitiafyIconModule
  ],
  exports: [
    YesOrNoDialogComponent
  ]
})
export class InitiafyYesOrNoModule { }
