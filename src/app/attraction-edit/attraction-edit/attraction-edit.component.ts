import { TouristAttraction } from './../../shared/models/tourist-attraction';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AttractionEditService } from './attraction-edit.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tg-attraction-edit',
  templateUrl: './attraction-edit.component.html',
  styleUrls: ['./attraction-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttractionEditComponent implements OnDestroy {
  public form: FormGroup = this._attractionEditService.form;
  private _subscription: Subscription;

  public constructor(
    private _attractionEditService: AttractionEditService,
    private _router: Router,
  ) {
  }

  public onSubmit(): void {
    const attraction = this.form.getRawValue() as TouristAttraction;
    this._subscription = this._attractionEditService.add(attraction).subscribe();
    this._router.navigate(['list']);
  }

  public ngOnDestroy(): void {
    this._subscription?.unsubscribe();
  }
}
