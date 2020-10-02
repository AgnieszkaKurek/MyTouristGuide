import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TouristAttractionDetailComponent } from './tourist-attraction-detail/tourist-attraction-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TouristAttractionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
