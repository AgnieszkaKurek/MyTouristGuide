import { NgModule } from '@angular/core';
import { EditAttractionsComponent} from './edit-attractions/edit-attractions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAttractionsRoutingModule } from './edit-attractions-routing.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    EditAttractionsRoutingModule,
  ],
  declarations: [
    EditAttractionsComponent,
  ],
})
export class EditAttractionsModule { }
