import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

@Component({
	selector: 'app-page-home',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss']
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
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
