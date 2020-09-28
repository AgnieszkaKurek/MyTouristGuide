import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TouristAttractionDetailComponent } from './tourist-attraction-detail/tourist-attraction-detail.component';
import { TouristAttractionAddressComponent } from './tourist-attraction-address/tourist-attraction-address.component';

@NgModule({
  imports: [
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TouristAttractionDetailComponent,
    TouristAttractionAddressComponent,
  ],
  declarations: [
    TouristAttractionDetailComponent,
    TouristAttractionAddressComponent,
  ],
})
export class DetailModule { }
