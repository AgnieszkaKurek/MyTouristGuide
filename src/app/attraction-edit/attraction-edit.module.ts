import { NgModule } from '@angular/core';
import { AttractionEditComponent} from './attraction-edit/attraction-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AttractionEditRoutingModule } from './attraction-edit.routing.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    ReactiveFormsModule,
    AttractionEditRoutingModule,
    MatInputModule,
  ],
  declarations: [
    AttractionEditComponent,
  ],
})
export class AttractionEditModule { }
