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
  GridComponent
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
  {
    path: 'yes-or-no',
    loadChildren: './sections/yes-or-no/yes-or-no.module#YesOrNoModule',
    pathMatch: 'full',
  },
  {
    path: 'snack-bar',
    loadChildren: './sections/snack-bar/snack-bar.module#SnackBarModule',
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
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true, } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
