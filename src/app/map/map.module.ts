import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
  imports: [
    MapRoutingModule,
  ],
  declarations: [
    MapComponent,
  ],
})
export class MapModule { }
