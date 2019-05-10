import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarDocumentationComponent } from './action-bar.component';
import { ActionBarRoutingModule } from './action-bar-routing.module';
import { SharedModule } from 'src/app/shared/shared.modules';

@NgModule({
  declarations: [ActionBarDocumentationComponent],
  imports: [
    CommonModule,
    ActionBarRoutingModule,
    SharedModule
  ]
})
export class ActionBarModule { }
