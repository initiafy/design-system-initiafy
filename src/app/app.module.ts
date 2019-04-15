import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {
  InitiafyButtonModule,
  InitiafyIconModule,
  InitiafySearchBarModule,
  InitiafyCardModule,
  InitiafyActionButtonModule
} from 'design-system-initiafy';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  GridComponent,
  ColorsComponent,
  TypographyComponent,
  ButtonsComponent,
  ActionsComponent,
  IconsComponent,
  AlertsComponent,
  MessagesComponent,
  StructureComponent,
  CssComponent,
  DataTableComponent
} from './sections';
import { DocumentationService } from './core';
import {
  HeaderComponent,
  FooterComponent,
  ContentComponent
} from './layout';
import { SearchBarComponent } from './sections/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent as AppDataTableComponent } from './shared/data-table/data-table.component';
import {
  MatPaginatorModule,
  MatIconModule,
  MatTooltipModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule
} from '@angular/material';
import { SharedModule } from './shared/shared.modules';

export function startupServiceFactory(
  startupService: DocumentationService
): Function {
  return () => startupService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ColorsComponent,
    TypographyComponent,
    DataTableComponent,
    ButtonsComponent,
    ActionsComponent,
    IconsComponent,
    AlertsComponent,
    MessagesComponent,
    CssComponent,
    HeaderComponent,
    FooterComponent,
    StructureComponent,
    ContentComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    DocumentationService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [DocumentationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
