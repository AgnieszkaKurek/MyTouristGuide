import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tg-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideComponent {
  text = 'This is Guide';
}
