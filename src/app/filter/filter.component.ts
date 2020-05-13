import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'tg-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  public form: FormGroup;

  public ngOnInit(): void {
    this.form = new FormGroup({
      filter: new FormControl(),
    });
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
