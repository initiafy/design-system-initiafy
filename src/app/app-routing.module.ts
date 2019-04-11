import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DashboardComponent,
  ActionsComponent,
  AlertsComponent,
  ButtonsComponent,
  ColorsComponent,
  GridComponent,
  CssComponent,
  IconsComponent,
  MessagesComponent,
  StructureComponent,
  SearchBarComponent,
  TypographyComponent,
  DataTableComponent
} from './sections';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'search-bar', component: SearchBarComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'css', component: CssComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'structure', component: StructureComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
