import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, debounceTime, tap } from 'rxjs/operators';
import { TouristAttractionListSettingService } from '../tourist-attraction-list-setting.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private isForm: FormGroup;
  public constructor(
    private settingsService: TouristAttractionListSettingService,
  ) {
  }

  public get form(): FormGroup {
    if (!this.isForm) {
      this.isForm = new FormGroup({
        filter: new FormControl(),
      });
    }
    return this.isForm;
  }

  public get filter(): Observable<string> {
    return this.isForm.get('filter').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300),
      tap(filter => this.settingsService.filter = filter),
    );
  }

}
