import { NgModule } from '@angular/core';
import { TileComponent} from './tile/tile.component';
import { TileGrideComponent } from './tile-grid/tile-grid.component';
import { TileRoutingModule } from './tile-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    TileRoutingModule,
    MatGridListModule,
    MatButtonModule,
    SharedModule,
    MatSortModule,
  ],
  declarations: [
    TileComponent,
    TileGrideComponent,
  ],
})
export class TileModule { }
