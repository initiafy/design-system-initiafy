import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionBarDocumentationComponent } from './action-bar.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: ActionBarDocumentationComponent
        }
      ]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionBarRoutingModule { }
