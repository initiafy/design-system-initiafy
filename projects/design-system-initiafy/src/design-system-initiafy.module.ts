import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiafyButtonModule } from './lib/button/button.module';
import { InitiafyIconModule } from './lib/icon/icon.module';
import { InitiafySearchBarModule } from './lib/search-bar/search-bar.module';
import { InitiafyCardModule } from './lib/card/card.module';
import { InitiafyActionButtonModule  } from './lib/action-button/action-button.module';
import { InitiafyYesOrNoModule } from './lib/yes-or-no/yes-or-no.module';

@NgModule({
  imports: [
    CommonModule,
    InitiafyButtonModule,
    InitiafyIconModule,
    InitiafySearchBarModule,
    InitiafyCardModule,
    InitiafyActionButtonModule,
    InitiafyYesOrNoModule
  ],
  exports: [
    InitiafyButtonModule,
    InitiafyIconModule,
    InitiafySearchBarModule,
    InitiafyCardModule,
    InitiafyActionButtonModule,
    InitiafyYesOrNoModule
  ]
})
export class DesignSystemInitiafyModule {}
