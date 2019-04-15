import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
