import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiafyRatingComponent } from './rating.component';
import { BrowserModule } from '@angular/platform-browser';
import { InitiafyIconModule } from '../icon/icon.module';

@NgModule({
  declarations: [InitiafyRatingComponent],
  imports: [CommonModule, BrowserModule, InitiafyIconModule],
  exports: [InitiafyRatingComponent]
})
export class InitiafyRatingModule { }
