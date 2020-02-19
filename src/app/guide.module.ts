
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuideComponent } from './guide/guide.component';
import { TableListComponent } from './table-list/table-list.component';
import { TileListComponent } from './tile-list/tile-list.component';
import { MapComponent } from './map/map.component';
import { GuideRoutingModule } from './guide-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TouristAttractionDb } from './tourist-attraction-db.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TableListGridComponent } from './table-list/table-list-grid/table-list-grid.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FilterEventComponent } from './filter-event/filter-event.component';

@NgModule({
  declarations: [
    GuideComponent,
    TableListComponent,
    TileListComponent,
    MapComponent,
    TableListGridComponent,
    FilterEventComponent, // bad name - it doesn't filter revents
  ],
  imports: [
    BrowserModule,
    GuideRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TouristAttractionDb),
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [GuideComponent],
})
export class GuideModule { }
