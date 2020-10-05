import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GuideComponent } from '../guide/guide/guide.component';
import { GuideRoutingModule } from './guide-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    GuideComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    SharedModule,
    GuideRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [GuideComponent],
})
export class GuideModule { }
