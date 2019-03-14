import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonComponent } from './button.component';
import { InitiafyIconModule } from '../icon/icon.module';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatTooltipModule, InitiafyIconModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class InitiafyButtonModule {}
