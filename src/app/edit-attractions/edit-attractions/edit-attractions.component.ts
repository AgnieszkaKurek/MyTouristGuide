import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tg-edit-attractions',
  templateUrl: './edit-attractions.component.html',
  styleUrls: ['./edit-attractions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditAttractionsComponent {

  public name: any = new FormControl('');

}
