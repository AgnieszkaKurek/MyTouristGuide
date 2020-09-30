import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'attractions/list',
    pathMatch: 'full',
  },
  {
    path: 'attractions/list',
    loadChildren: () => import('../table/table.module').then(m => m.TableModule),
  },
  {
    path: 'attractions/tile',
    loadChildren: () => import('../tile/tile.module').then(m => m.TileModule),
  },
  {
    path: 'attractions/map',
    loadChildren: () => import('../map/map.module').then(m => m.MapModule),
  },
  {
    path: 'attraction/:id',
    loadChildren: () => import('../detail/detail.module').then(m => m.DetailModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule { }
