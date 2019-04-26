import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiafyCardDocumentationComponent } from './initiafy-card.component';
import { InitiafyCardRoutingModule } from './initiafy-card-routing.module';
import { SharedModule } from 'src/app/shared/shared.modules';

@NgModule({
  declarations: [InitiafyCardDocumentationComponent],
  imports: [
    CommonModule,
    SharedModule,
    InitiafyCardRoutingModule
  ]
})
export class InitiafyCardModule { }
