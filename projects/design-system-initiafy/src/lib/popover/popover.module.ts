import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdePopoverModule } from '@material-extended/mde';
import { PopoverComponent } from './popover.component';
import { FormsModule } from '@angular/forms';
import { InitiafyButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    MdePopoverModule,
    FormsModule,
    InitiafyButtonModule
  ],
  declarations: [PopoverComponent],
  exports: [PopoverComponent]
})
export class InitiafyPopoverModule { }
