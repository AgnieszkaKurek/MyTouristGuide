
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GuideComponent } from './guide/guide.component';


@NgModule({
  declarations: [
    GuideComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [GuideComponent]
})
export class GuideModule { }
