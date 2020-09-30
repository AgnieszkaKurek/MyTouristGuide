import { NgModule } from '@angular/core';
import { TileListComponent } from './tile-list/tile-list.component';
import { TileRoutingModule } from './tile-routing.module';

@NgModule({
  imports: [
    TileRoutingModule,
  ],
  declarations: [
    TileListComponent,
  ],
})
export class TileModule { }
