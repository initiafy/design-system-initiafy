import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YesOrNoDocumentationComponent } from './yes-or-no-documentation/yes-or-no-documentation.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: YesOrNoDocumentationComponent
        }
      ]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YesOrNoRoutingModule { }
