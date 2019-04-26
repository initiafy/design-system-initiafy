import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitiafyCardDocumentationComponent } from './initiafy-card.component';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: InitiafyCardDocumentationComponent
        }
      ]
    }
];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitiafyCardRoutingModule { }
