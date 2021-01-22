import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TouristAttractionService } from '../../shared/tourist-attraction.service';
import { TouristAttraction } from '../../shared/models/tourist-attraction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AttractionEditService {

  private _form: FormGroup;

  public constructor(
    private _attractionService: TouristAttractionService,
  ) {
  }

  public get form(): FormGroup {
    if (!this._form) {
      this._form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.maxLength(40)]),
      });
    }
    return this._form;
  }

  public add(attraction: TouristAttraction): Observable<TouristAttraction> {
    return this._attractionService._add(attraction);
  }
}
