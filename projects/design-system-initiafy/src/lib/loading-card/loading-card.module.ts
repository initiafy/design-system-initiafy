import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiafyCardModule } from '../card/card.module';
import { InitiafyProgressBarModule } from '../progress-bar/progress-bar.module';

import { LoadingCardComponent } from './loading-card.component';

@NgModule({
  imports: [CommonModule, InitiafyCardModule, InitiafyProgressBarModule],
  declarations: [LoadingCardComponent],
  exports: [LoadingCardComponent]
})
export class InitiafyLoadingCardModule { }
