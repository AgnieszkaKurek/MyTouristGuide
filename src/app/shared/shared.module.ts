import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../shared/filter/filter.component';
import { PaginatorComponent } from '../shared/paginator/paginator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FilterComponent,
    PaginatorComponent,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    PaginatorComponent,
    FilterComponent,
  ],
})
export class SharedModule { }
