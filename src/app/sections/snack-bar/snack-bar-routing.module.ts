import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnackBarDocumentationComponent } from './snack-bar-documentation/snack-bar-documentation.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: SnackBarDocumentationComponent
        }
      ]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnackBarRoutingModule { }
