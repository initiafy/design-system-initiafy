import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingCardRoutingModule } from './loading-card-routing.module';
import { SharedModule } from 'src/app/shared/shared.modules';
import { LoadingCardDocumentationComponent } from './loading-card.component';
import { InitiafyLoadingCardModule } from 'projects/design-system-initiafy/src/public_api';

@NgModule({
  declarations: [LoadingCardDocumentationComponent],
  imports: [
    CommonModule,
    InitiafyLoadingCardModule,
    LoadingCardRoutingModule,
    SharedModule
  ]
})
export class LoadingCardModule { }
