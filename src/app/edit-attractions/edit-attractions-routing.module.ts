import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditAttractionsComponent } from './edit-attractions/edit-attractions.component';

const routes: Routes = [
  {
    path: '',
    component: EditAttractionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAttractionsRoutingModule { }
