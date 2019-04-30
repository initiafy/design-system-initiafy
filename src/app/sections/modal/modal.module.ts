import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalDocumentationComponent } from './modal.component';

@NgModule({
  declarations: [ModalDocumentationComponent],
  imports: [
    CommonModule,
    ModalRoutingModule
  ]
})
export class ModalModule { }
