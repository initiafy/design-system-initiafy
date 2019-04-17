import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNoDocumentationComponent } from './yes-or-no-documentation/yes-or-no-documentation.component';
import { YesOrNoRoutingModule } from './yes-or-no-routing.module';
import { InitiafyYesOrNoModule, InitiafyButtonModule } from 'projects/design-system-initiafy/src/public_api';
import { SharedModule } from 'src/app/shared/shared.modules';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [YesOrNoDocumentationComponent],
  imports: [
    CommonModule,
    SharedModule,
    InitiafyYesOrNoModule,
    InitiafyButtonModule,
    YesOrNoRoutingModule,
    MatDialogModule
  ]
})
export class YesOrNoModule { }
