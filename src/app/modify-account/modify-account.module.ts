import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModifyAccountPage } from './modify-account.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModifyAccountPage]
})
export class ModifyAccountPageModule {}