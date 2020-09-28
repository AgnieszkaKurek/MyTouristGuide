import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableListComponent } from '../table/table-list/table-list.component';
import { TileListComponent } from '../tile/tile-list/tile-list.component';
import { MapComponent } from '../map/map/map.component';
import { TouristAttractionDetailComponent } from '../detail/tourist-attraction-detail/tourist-attraction-detail.component';

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
