import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AttractionEditService } from './attraction-edit.service';

@Component({
  selector: 'tg-attraction-edit',
  templateUrl: './attraction-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttractionEditComponent {
  public form: FormGroup = this.attractionEditService.form;

  public constructor(
    private attractionEditService: AttractionEditService,
  ) {
  }

  public onSubmit(): any {
    console.log(this.form.getRawValue());
  }

}
