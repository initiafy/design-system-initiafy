import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { InitiafyIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [RatingComponent],
  imports: [CommonModule, InitiafyIconModule],
  exports: [RatingComponent]
})
export class InitiafyRatingModule { }
