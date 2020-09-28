import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { TableListComponent } from './table-list/table-list.component';
import { TableListGridComponent } from './table-list-grid/table-list-grid.component';

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    TableListComponent,
    TableListGridComponent
  ],
  declarations: [
    TableListComponent,
    TableListGridComponent
  ],
})
export class TableModule { }
