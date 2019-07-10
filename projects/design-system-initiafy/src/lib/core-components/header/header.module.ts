import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { InitiafyProgressBarModule } from '../../progress-bar/progress-bar.module';

@NgModule({
  imports: [
    CommonModule,
    InitiafyProgressBarModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class InitiafyHeaderModule { }
