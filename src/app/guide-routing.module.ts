import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { TileListComponent } from './tile-list/tile-list.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full',
  },
  {
    path: 'table',
    component: TableListComponent,
  },
  {
    path: 'tile',
    component: TileListComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule { }
