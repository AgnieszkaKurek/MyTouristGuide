import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tg-attraction-edit',
  templateUrl: './attraction-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttractionEditComponent {

  public newTouristAttraction: any = new FormGroup({
    name: new FormControl(''),
  });

}
