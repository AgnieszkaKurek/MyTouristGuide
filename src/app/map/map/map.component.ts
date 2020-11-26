import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var H: any;

@Component({
  selector: 'tg-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
  private title: any = 'MyTouristGuide';
  private platform: any;

  @ViewChild('map', { static: true })
  public mapElement: ElementRef;

  public constructor() {
    this.platform = new H.service.Platform({
      apikey: 'API_KEY'
    });
  }

  public ngAfterViewInit(): void {
    const defaultLayers = this.platform.createDefaultLayers();
    const map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: 52.231924, lng: 21.006727 }
      }
    );
  }
}
