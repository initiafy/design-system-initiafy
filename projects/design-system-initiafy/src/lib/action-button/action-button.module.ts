import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTooltipModule } from '@angular/material/tooltip';
import { InitiafyIconModule } from '../icon/icon.module';
import { ActionButtonComponent } from './action-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    InitiafyIconModule
  ],
  declarations: [ActionButtonComponent],
  exports: [ActionButtonComponent]
})
export class InitiafyActionButtonModule { }
