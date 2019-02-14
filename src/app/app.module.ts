import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitiafyDesignSystemModule } from 'initiafy-design-system';
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
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InitiafyDesignSystemModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
