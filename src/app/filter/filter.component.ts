import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tg-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {

  @Output()
  public filterChanged: EventEmitter<string> = new EventEmitter<string>();

  public onKeyUp(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim();
    this.filterChanged.emit(filterValue);
  }
}
