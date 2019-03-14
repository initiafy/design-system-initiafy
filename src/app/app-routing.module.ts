import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DashboardComponent,
  ActionsComponent,
  AlertsComponent,
  ButtonsComponent,
  ColorsComponent,
  GridComponent,
  HelpersComponent,
  IconsComponent,
  MessagesComponent,
  StructureComponent,
  TypographyComponent
} from './sections';

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
export class AppRoutingModule {}
