import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { TouristAttractionListSettingService } from '../../tourist-attraction-list-setting.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private form: FormGroup;
  public constructor(
    private settingsService: TouristAttractionListSettingService,
  ) {
  }

  public get forms(): FormGroup {
    if (!this.form) {
      this.form = new FormGroup({
        filter: new FormControl(),
      });
    }
    return this.form;
  }

  public get filter(): Observable<string> {
    return this.form.get('filter').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      tap(filter => this.settingsService.filter = filter),
    );
  }

}
