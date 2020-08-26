import { TouristAttractionDetailComponent } from './tourist-attraction-detail/tourist-attraction-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { TileListComponent } from './tile-list/tile-list.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'attractions/list',
    pathMatch: 'full',
  },
  {
    path: 'attractions/list',
    component: TableListComponent,
  },
  {
    path: 'attractions/tile',
    component: TileListComponent,
  },
  {
    path: 'attractions/map',
    component: MapComponent,
  },
  {
    path: 'attraction/:id',
    component: TouristAttractionDetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule { }
