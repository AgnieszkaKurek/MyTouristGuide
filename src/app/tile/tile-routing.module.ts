import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TileListComponent } from './tile-list/tile-list.component';

const routes: Routes = [
  {
    path: '',
    component: TileListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TileRoutingModule { }
