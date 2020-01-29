import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListComponent } from './grid-list/grid-list.component';
import { TileListComponent } from './tile-list/tile-list.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'grid-list', component: GridListComponent },
  { path: 'tile-list', component:  TileListComponent },
  { path: 'map', component:  MapComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GuideRoutingModule { }
