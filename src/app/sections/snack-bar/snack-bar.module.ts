import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarDocumentationComponent } from './snack-bar-documentation/snack-bar-documentation.component';
import { SnackBarRoutingModule } from './snack-bar-routing.module';
import { SharedModule } from 'src/app/shared/shared.modules';
import { InitiafySnackBarModule, InitiafyButtonModule } from 'projects/design-system-initiafy/src/public_api';

@NgModule({
  declarations: [SnackBarDocumentationComponent],
  imports: [
    CommonModule,
    SnackBarRoutingModule,
    SharedModule,
    InitiafySnackBarModule,
    InitiafyButtonModule
  ]
})
export class SnackBarModule { }
