import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesOrNoDocumentationComponent } from './yes-or-no-documentation/yes-or-no-documentation.component';
import { YesOrNoRoutingModule } from './yes-or-no-routing.module';
import { InitiafyYesOrNoModule, InitiafyButtonModule } from 'design-system-initiafy';
import { SharedModule } from 'src/app/shared/shared.modules';

@NgModule({
  declarations: [YesOrNoDocumentationComponent],
  imports: [
    CommonModule,
    SharedModule,
    InitiafyYesOrNoModule,
    InitiafyButtonModule,
    YesOrNoRoutingModule
  ]
})
export class YesOrNoModule { }
