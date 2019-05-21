import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabReviewPage } from './tab-review.page';

@Component({
	selector: 'app-page-home',
	templateUrl: 'tab-review.page.html',
	styleUrls: ['tab-review.page.scss']
})
export class Homepage {
	public form = [
		{ val: 'Peperoni', isChecked: true},
		{ val: 'Sausage', isChecked: false},
		{ val: 'Mushroom', isChecked: false}
	];
}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TabReviewPage }])
  ],
  declarations: [TabReviewPage]
})
export class TabReviewPageModule {}
