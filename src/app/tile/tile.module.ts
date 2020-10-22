import { NgModule } from '@angular/core';
import { TileComponent} from './tile/tile.component';
import { TileGridComponent } from './tile-grid/tile-grid.component';
import { TileRoutingModule } from './tile-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    TileRoutingModule,
    MatGridListModule,
    MatButtonModule,
    SharedModule,
    MatSortModule,
    MatCardModule
  ],
  declarations: [
    TileComponent,
    TileGridComponent,
  ],
})
export class TileModule { }
