import { Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'tg-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FilterEventComponent {

  public onKeyUp(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }
}
