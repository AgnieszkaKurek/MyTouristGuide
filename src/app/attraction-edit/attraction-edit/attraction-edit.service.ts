import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AttractionEditService {

  private _form: FormGroup;

  public get form(): FormGroup {
    if (!this._form) {
      this._form = new FormGroup({
        name: new FormControl(),
      });
    }
    return this._form;
  }

}
