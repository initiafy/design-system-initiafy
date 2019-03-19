import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InitiafyIconModule } from '../icon/icon.module';
import { SearchBarComponent } from './search-bar.component';



@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    InitiafyIconModule
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class InitiafySearchBarModule {}
