import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ReviewPage } from './review.page';
import { SearchClinicModalComponent } from "../../search-clinic-modal/search-clinic-modal.component";

const routes: Routes = [
  {
    path: '',
    component: ReviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    SearchClinicModalComponent
  ],
  declarations: [ 
    ReviewPage,
    SearchClinicModalComponent
  ]
})
export class ReviewPageModule {
}
