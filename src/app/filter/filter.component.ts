import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { TouristAttractionListSettingService } from '../tourist-attraction-list-setting.service';
import { TouristAttractionListSetting } from '../tourist-attraction-list-setting.service'

@Component({
  selector: 'tg-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  public form: FormGroup;

  public settings$: Observable<TouristAttractionListSetting>;

  public constructor(
    private settingsService: TouristAttractionListSettingService,
  ) {
  }

  public ngOnInit(): void {
    this.form = new FormGroup({
      filter: new FormControl(),
    });
    this.settings$ = this.settingsService.settingsChanged.pipe(
      tap(settings => this.form.patchValue({ filter: settings.filter }, { emitEvent: false })),
    );
    this.sub = this.form.get('filter').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(300),
    ).subscribe(filter => {
      console.log(`filter changed to: ${filter}`);
    })
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
