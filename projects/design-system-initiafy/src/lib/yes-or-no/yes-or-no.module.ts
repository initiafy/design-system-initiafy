import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNoDialogComponent } from './yes-or-no.component';
import { InitiafyIconModule } from '../icon/icon.module';
import { InitiafyButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    YesOrNoDialogComponent
  ],
  imports: [
    CommonModule,
    InitiafyIconModule,
    InitiafyButtonModule
  ],
  exports: [
    YesOrNoDialogComponent
  ]
})
export class InitiafyYesOrNoModule { }
