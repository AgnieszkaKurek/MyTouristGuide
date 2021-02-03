import { TouristAttraction } from './../../shared/models/tourist-attraction';
import { Component, ChangeDetectionStrategy, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
export class AttractionEditComponent implements OnDestroy, AfterViewInit {
  private _addActionSubscription: Subscription;

  public form: FormGroup = this._attractionEditService.form;

  @ViewChild('nameImput')
  private _inputEl: ElementRef;

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

  public hasError(controlName: string, errorName: string): boolean {
    return this.form.controls[controlName].hasError(errorName);
  }

  public ngOnDestroy(): void {
    this._addActionSubscription?.unsubscribe();
  }

  public ngAfterViewInit(): void {
    this._inputEl.nativeElement.focus();
  }
}
