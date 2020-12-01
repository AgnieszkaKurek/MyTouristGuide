import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttractionEditComponent } from './attraction-edit/attraction-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AttractionEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttractionEditRoutingModule { }
