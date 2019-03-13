import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from './lib/icon/icon.component';
import { InitiafyButtonModule } from './lib/button/buttons.module';
import { InitiafyIconModule } from './lib/icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    InitiafyButtonModule,
    InitiafyIconModule
  ],
  exports: [InitiafyButtonModule, InitiafyIconModule]
})
export class DesignSystemInitiafyModule {}
