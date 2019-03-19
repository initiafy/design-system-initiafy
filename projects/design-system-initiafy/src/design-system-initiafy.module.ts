import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiafyButtonModule } from './lib/button/button.module';
import { InitiafyIconModule } from './lib/icon/icon.module';
import { InitiafySearchBarModule } from './lib/search-bar/search-bar.module';

@NgModule({
  imports: [
    CommonModule,
    InitiafyButtonModule,
    InitiafyIconModule,
    InitiafySearchBarModule
  ],
  exports: [InitiafyButtonModule, InitiafyIconModule, InitiafySearchBarModule]
})
export class DesignSystemInitiafyModule {}
