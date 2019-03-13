import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignSystemInitiafyModule } from 'design-system-initiafy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './shared/content/content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GridComponent } from './grid/grid.component';
import { ColorsComponent } from './colors/colors.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ActionsComponent } from './actions/actions.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { MessagesComponent } from './messages/messages.component';
import { HelpersComponent } from './helpers/helpers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructureComponent } from './structure/structure.component';

import { CommonService } from './common.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DocumentationComponent } from './shared/documentation/documentation.component';
import { DocumentationService } from './core/documentation.service';
import { CodeComponent } from './shared/code/code.component';

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
    ButtonsComponent,
    ActionsComponent,
    IconsComponent,
    AlertsComponent,
    MessagesComponent,
    HelpersComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    StructureComponent,
    ContentComponent,
    DocumentationComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignSystemInitiafyModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        }
      }
    })
  ],
  providers: [
    CommonService,
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
export class AppModule {}
