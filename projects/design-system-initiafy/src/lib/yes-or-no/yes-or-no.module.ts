import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNoComponent } from './yes-or-no.component';
import { InitiafyIconModule } from '../icon/icon.module';
import { InitiafyButtonModule } from '../button/button.module';

@NgModule({
  declarations: [
    YesOrNoComponent
  ],
  imports: [
    CommonModule,
    InitiafyIconModule,
    InitiafyButtonModule
  ],
  exports: [ YesOrNoComponent ]
})
export class InitiafyYesOrNoModule { }
