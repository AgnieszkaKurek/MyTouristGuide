import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadChildren: () => import('../table/table.module').then(m => m.TableModule),
  },
  {
    path: 'tile',
    loadChildren: () => import('../tile/tile.module').then(m => m.TileModule),
  },
  {
    path: 'map',
    loadChildren: () => import('../map/map.module').then(m => m.MapModule),
  },
  {
    path: ':id',
    loadChildren: () => import('../detail/detail.module').then(m => m.DetailModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule { }
