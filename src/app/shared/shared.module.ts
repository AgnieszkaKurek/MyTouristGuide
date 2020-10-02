import { NgModule } from '@angular/core';
import { FilterComponent } from '../shared/filter/filter.component';
import { PaginatorComponent } from '../shared/paginator/paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TouristAttractionDb } from './tourist-attraction-db.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(TouristAttractionDb),
    CommonModule,
  ],
  declarations: [
    PaginatorComponent,
    FilterComponent,
  ],
  exports: [
    PaginatorComponent,
    FilterComponent,
  ]
})
export class SharedModule { }
