import { Component, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';

declare var H: any;

@Component({
  selector: 'tg-here-map',
  templateUrl: './here-map.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HereMapComponent implements AfterViewInit {

  @ViewChild('map', { static: true })
  public mapElement: ElementRef;

  @Input()
  private apikey: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  public constructor() { }

  public ngAfterViewInit(): void {
    const platform = new H.service.Platform({
      apikey: this.apikey
    });
    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: this.lat, lng: this.lng }
      }
    );
  }

}
