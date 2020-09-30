import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { TableListComponent } from './table-list/table-list.component';
import { TableListGridComponent } from './table-list-grid/table-list-grid.component';
import { TableRoutingModule } from './table-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    TableRoutingModule,
    SharedModule,
  ],
  declarations: [
    TableListComponent,
    TableListGridComponent
  ],
})
export class TableModule { }
