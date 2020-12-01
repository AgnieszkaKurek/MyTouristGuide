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
    path: 'adaNewAttraction',
    loadChildren: () => import('../attraction-edit/attraction-edit.module').then(m => m.AttractionEditModule),
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GuideRoutingModule { }
