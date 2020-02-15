
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuideComponent } from './guide/guide.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { TileListComponent } from './tile-list/tile-list.component';
import { MapComponent } from './map/map.component';
import { GuideRoutingModule } from './guide-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TouristAttractionDb } from './tourist-attraction-db.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TouristAttractionDb),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [GuideComponent],
})
export class GuideModule { }
