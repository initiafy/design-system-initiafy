import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridComponent } from './grid/grid.component';
import { HelpersComponent } from './helpers/helpers.component';
import { IconsComponent } from './icons/icons.component';
import { MessagesComponent } from './messages/messages.component';
import { StructureComponent } from './structure/structure.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'helpers', component: HelpersComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'structure', component: StructureComponent },
  { path: 'typography', component: TypographyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
