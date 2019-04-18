import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiafyIconModule } from '../icon/icon.module';
import { ResultComponent } from './result.component';

@NgModule({
  imports: [
    CommonModule,
    InitiafyIconModule
  ],
  declarations: [ResultComponent],
  exports: [ResultComponent]
})
export class InitiafyResultModule { }
