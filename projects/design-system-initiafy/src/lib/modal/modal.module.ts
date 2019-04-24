import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiafyIconModule } from '../icon/icon.module';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [CommonModule, InitiafyIconModule],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class InitiafyModalModule { }
