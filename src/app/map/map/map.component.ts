import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var H: any;

@Component({
  selector: 'tg-map',
  templateUrl: './map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit, AfterViewInit {
  private title: any = 'MyTouristGuide';
  private platform: any;

  @ViewChild('map')
  public mapElement: ElementRef;

  public constructor() {
    this.platform = new H.service.Platform({
      apikey: 'API_KEY'
    });
  }

  public ngOnInit(): void { }

  public ngAfterViewInit(): void {
    const defaultLayers = this.platform.createDefaultLayers();
    const map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: 37.7397, lng: -121.4252 }
      }
    );
  }
}
