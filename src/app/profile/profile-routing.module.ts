import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './profile-parent-component/address/address.component';
import { TermsComponent } from './profile-parent-component/terms/terms.component';
const routes: Routes = [
  {path: 'account', component: AddressComponent},
  {path: 'terms', component: TermsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
