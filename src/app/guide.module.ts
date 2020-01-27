
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuideComponent } from './guide/guide.component';
import { GrideViewComponent } from './gride-view/gride-view.component';
import { TileViewComponent } from './tile-view/tile-view.component';
import { MapViewComponent } from './map-view/map-view.component';


@NgModule({
  declarations: [
    GuideComponent,
    GrideViewComponent,
    TileViewComponent,
    MapViewComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [GuideComponent]
})
export class GuideModule { }
