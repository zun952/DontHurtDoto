import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'edit-account', loadChildren: './edit-account/edit-account.module#EditAccountPageModule' },
  { path: 'edit-pet', loadChildren: './edit-pet/edit-pet.module#EditPetPageModule' },
  //{ path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
