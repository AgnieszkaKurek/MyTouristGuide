
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuideComponent } from './guide/guide.component';
import { GrideViewComponent } from './gride-view/gride-view.component';


@NgModule({
  declarations: [
    GuideComponent,
    GrideViewComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [GuideComponent]
})
export class GuideModule { }
