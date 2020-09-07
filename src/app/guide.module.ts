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
import { FilterComponent } from './filter/filter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableListPaginatorComponent } from './table-list/table-list-paginator/table-list-paginator.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TouristAttractionDetailComponent } from './tourist-attraction-detail/tourist-attraction-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { TouristAttractionAddressComponent } from './tourist-attraction-detail/tourist-attraction-address/tourist-attraction-address.component';

@NgModule({
  declarations: [
    GuideComponent,
    TableListComponent,
    TileListComponent,
    MapComponent,
    TableListGridComponent,
    FilterComponent,
    TableListPaginatorComponent,
    TouristAttractionDetailComponent,
    TouristAttractionAddressComponent,
  ],
  imports: [
    BrowserModule,
    GuideRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TouristAttractionDb),
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [GuideComponent],
})
export class GuideModule { }
