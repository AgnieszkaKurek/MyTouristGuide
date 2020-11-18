import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { HereMapComponent } from './here-map/here-map.component';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
  imports: [
    MapRoutingModule,
  ],
  declarations: [
    MapComponent,
    HereMapComponent,
  ],
})
export class MapModule { }
