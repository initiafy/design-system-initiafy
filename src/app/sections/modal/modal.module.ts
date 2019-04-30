import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalDocumentationComponent } from './modal.component';
import { InitiafyModalModule } from 'projects/design-system-initiafy/src/public_api';
import { SharedModule } from 'src/app/shared/shared.modules';

@NgModule({
  declarations: [ModalDocumentationComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModalRoutingModule,
    InitiafyModalModule
  ]
})
export class ModalModule { }
