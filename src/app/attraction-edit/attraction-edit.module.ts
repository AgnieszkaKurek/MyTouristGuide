import { NgModule } from '@angular/core';
import { AttractionEditComponent} from './attraction-edit/attraction-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AttractionEditRoutingModule } from './attraction-edit.routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TrimOnBlurModule } from 'ng2-trim-on-blur';
import { MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AttractionEditRoutingModule,
    MatInputModule,
    MatButtonModule,
    TrimOnBlurModule,
    MatSelectModule,
  ],
  declarations: [
    AttractionEditComponent,
  ],
})
export class AttractionEditModule { }
