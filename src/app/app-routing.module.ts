import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  CssComponent,
  IconsComponent,
  StructureComponent,
  TypographyComponent,
  DataTableComponent,
  ActionsComponent,
  SearchBarComponent,
  ButtonsComponent,
  ColorsComponent,
  GridComponent,
  YesOrNoComponent,
  SnackBarComponent
} from './sections';

const routes: Routes = [
  {
    path: '',
    loadChildren: './sections/dashboard/dashboard.module#DashboardModule',
    pathMatch: 'full',
  },
  {
    path: 'loading-card',
    loadChildren: './sections/loading-card/loading-card.module#LoadingCardModule',
    pathMatch: 'full',
  },
  {
    path: 'initiafy-card',
    loadChildren: './sections/initiafy-card/initiafy-card.module#InitiafyCardModule',
    pathMatch: 'full',
  },
  { path: 'actions', component: ActionsComponent },
  { path: 'search-bar', component: SearchBarComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'css', component: CssComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'structure', component: StructureComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: 'snack-bar', component: SnackBarComponent },
  { path: 'yes-or-no', component: YesOrNoComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true, } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
