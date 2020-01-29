
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuideComponent } from './guide/guide.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { TileListComponent } from './tile-list/tile-list.component';
import { MapComponent } from './map/map.component';
import { GuideRoutingModule } from './guide-routing.module';


@NgModule({
  declarations: [
    GuideComponent,
    GridListComponent,
    TileListComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    GuideRoutingModule,
  ],
  providers: [],
  bootstrap: [GuideComponent]
})
export class GuideModule { }
