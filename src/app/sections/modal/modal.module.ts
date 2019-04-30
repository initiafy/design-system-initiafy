import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule, FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';

import { ModalRoutingModule } from './modal-routing.module';
import { ModalDocumentationComponent } from './modal.component';
import { InitiafyModalModule } from 'projects/design-system-initiafy/src/public_api';
import { SharedModule } from 'src/app/shared/shared.modules';
import { ExampleModalComponent } from './example-modal/example-modal.component';

@NgModule({
  declarations: [ModalDocumentationComponent, ExampleModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    OverlayModule,
    ModalRoutingModule,
    InitiafyModalModule
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  entryComponents: [ExampleModalComponent]
})
export class ModalModule { }
