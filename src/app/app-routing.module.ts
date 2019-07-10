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
  CardDocumentationComponent
} from './sections';
import { HeaderComponent } from './sections/header/header.component';

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
    path: 'yes-or-no',
    loadChildren: './sections/yes-or-no/yes-or-no.module#YesOrNoModule',
    pathMatch: 'full',
  },
  {
    path: 'snack-bar',
    loadChildren: './sections/snack-bar/snack-bar.module#SnackBarModule',
    pathMatch: 'full',
  },
  {
    path: 'modal',
    loadChildren: './sections/modal/modal.module#ModalModule',
    pathMatch: 'full',
  },
  { path: 'actions', component: ActionsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'search-bar', component: SearchBarComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'grid', component: GridComponent },
  { path: 'css', component: CssComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'structure', component: StructureComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: 'card', component: CardDocumentationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { enableTracing: true, } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
