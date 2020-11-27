import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadChildren: () => import('../table/table.module').then(m => m.TableModule),
  },
  {
    path: 'tile',
    loadChildren: () => import('../tile/tile.module').then(m => m.TileModule),
  },
  {
    path: ':id',
    loadChildren: () => import('../detail/detail.module').then(m => m.DetailModule),
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class GuideRoutingModule { }
