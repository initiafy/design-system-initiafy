import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* 
 * Core Lib Modules
 * Alphabetical order please
 */
import { InitiafyHeaderModule } from './lib/core-components/header/header.module';
import { InitiafySidenavModule } from './lib/core-components/sidenav/sidenav.module';
import { InitiafyContentModule } from './lib/core-components/content/content.module';

/* 
 * Components Lib Modules
 * Alphabetical order please
 */
import { InitiafyActionBarModule } from './lib/action-bar/action-bar.module';
import { InitiafyActionButtonModule  } from './lib/action-button/action-button.module';
import { InitiafyButtonModule } from './lib/button/button.module';
import { InitiafyCardModule } from './lib/card/card.module';
import { InitiafyDataTableModule } from './lib/data-table/data-table.module';
import { InitiafyLoadingCardModule } from './lib/loading-card/loading-card.module';
import { InitiafyIconModule } from './lib/icon/icon.module';
import { InitiafyModalModule } from './lib/modal/modal.module';
import { InitiafyProgressBarModule } from './lib/progress-bar/progress-bar.module';
import { InitiafyResultModule } from './lib/result/result.module';
import { InitiafySearchBarModule } from './lib/search-bar/search-bar.module';
import { InitiafySnackBarModule } from './lib/snack-bar/snack-bar.module';
import { InitiafySpinnerModule } from './lib/spinner/spinner.module';
import { InitiafyYesOrNoModule } from './lib/yes-or-no/yes-or-no.module';

@NgModule({
  imports: [
    CommonModule,
    InitiafyHeaderModule,
    InitiafySidenavModule,
    InitiafyContentModule,
    InitiafyActionBarModule,
    InitiafyActionButtonModule,
    InitiafyButtonModule,
    InitiafyCardModule,
    InitiafyDataTableModule,
    InitiafyIconModule,
    InitiafyLoadingCardModule,
    InitiafyModalModule,
    InitiafyProgressBarModule,
    InitiafyResultModule,
    InitiafySearchBarModule,
    InitiafySnackBarModule,
    InitiafySpinnerModule,
    InitiafyYesOrNoModule
  ],
  exports: [
    InitiafyHeaderModule,
    InitiafySidenavModule,
    InitiafyContentModule,
    InitiafyActionBarModule,
    InitiafyActionButtonModule,
    InitiafyButtonModule,
    InitiafyCardModule,
    InitiafyDataTableModule,
    InitiafyIconModule,
    InitiafyLoadingCardModule,
    InitiafyModalModule,
    InitiafyProgressBarModule,
    InitiafySearchBarModule,
    InitiafyResultModule,
    InitiafySearchBarModule,
    InitiafySnackBarModule,
    InitiafySpinnerModule,
    InitiafyYesOrNoModule
  ],
  declarations: []
})
export class DesignSystemInitiafyModule {}
