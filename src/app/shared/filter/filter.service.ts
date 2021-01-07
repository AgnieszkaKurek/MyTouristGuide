import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { TouristAttractionListSettingService } from '../tourist-attraction-list-setting.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _form: FormGroup;
  public constructor(
    private _settingsService: TouristAttractionListSettingService,
  ) {
  }

  public get forms(): FormGroup {
    if (!this._form) {
      this._form = new FormGroup({
        filter: new FormControl(),
      });
    }
    return this._form;
  }

  public get filter(): Observable<string> {
    return this._form.get('filter').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      tap(filter => this._settingsService.filter = filter),
    );
  }

}
