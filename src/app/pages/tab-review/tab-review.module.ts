import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabReviewPage } from './tab-review.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
	FormsModule,
	CalendarModule,
    RouterModule.forChild([{ path: '', component: TabReviewPage }])
  ],
  declarations: [TabReviewPage]
})


export class TabReviewPageModule {
	
}