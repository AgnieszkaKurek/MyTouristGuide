import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GuideComponent } from '../guide/guide/guide.component';
import { GuideRoutingModule } from './guide-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TouristAttractionDb } from '../shared/tourist-attraction-db.service';
import { MapModule } from '../map/map.module';
import { TileModule } from '../tile/tile.module';
import { DetailModule } from '../detail/detail.module';
import { TableModule } from '../table/table.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GuideComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(TouristAttractionDb),
    SharedModule,
    GuideRoutingModule,
    MapModule,
    TileModule,
    DetailModule,
    TableModule
  ],
  providers: [],
  bootstrap: [GuideComponent],
})
export class GuideModule { }
