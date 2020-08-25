import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FilterService } from './filter.service';

@Component({
  selector: 'tg-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  public form: FormGroup = this.filterService.forms;
  public filter$: Observable<string> = this.filterService.filter;

  public constructor(
    private filterService: FilterService,
  ) {
  }
}
