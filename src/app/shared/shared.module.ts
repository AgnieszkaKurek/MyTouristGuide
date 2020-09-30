import { NgModule } from '@angular/core';
import { FilterComponent } from '../shared/filter/filter.component';
import { PaginatorComponent } from '../shared/paginator/paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
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
