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
  private _addActionSubscription: Subscription;

  public form: FormGroup = this._attractionEditService.form;

  public constructor(
    private _attractionEditService: AttractionEditService,
    private _router: Router,
  ) {
  }

  public onSubmit(): void {
    const attraction = this.form.getRawValue() as TouristAttraction;
    this._addActionSubscription = this._attractionEditService.add(attraction).subscribe(
      () => {
        this._router.navigate(['list']);
        this.form.reset();
      }
    );
  }

  public ngOnDestroy(): void {
    this._addActionSubscription?.unsubscribe();
  }
}
