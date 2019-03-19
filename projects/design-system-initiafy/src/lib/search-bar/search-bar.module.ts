import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiafyIconModule } from '../icon/icon.module';
import { SearchBarComponent } from './search-bar.component';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { InitiafyButtonModule } from '../button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    InitiafyButtonModule,
    InitiafyIconModule
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class InitiafySearchBarModule {}
