import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'edit-account', loadChildren: './pages/edit-account/edit-account.module#EditAccountPageModule' },
  { path: 'edit-pet', loadChildren: './pages/edit-pet/edit-pet.module#EditPetPageModule' },
  { path: 'review/:mode', loadChildren: './pages/review/review.module#ReviewPageModule' },
  { path: 'show-review', loadChildren: './pages/show-review/show-review.module#ShowReviewPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
