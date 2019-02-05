import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileEditComponent } from './profile-parent-component/profile-details/profile-edit/profile-edit.component';
import { ProfileDetailsComponent } from './profile-parent-component/profile-details/profile-details.component';
import { ApplyChargesComponent } from './profile-parent-component/apply-charges/apply-charges.component';
import { SocietyInfoTitleComponent } from './profile-parent-component/society-info-title/society-info-title.component';
import { AddressComponent } from './profile-parent-component/address/address.component';
import { AccountComponent } from './profile-parent-component/account/account.component';
import { TermsComponent } from './profile-parent-component/terms/terms.component';
import { ProfileParentComponentComponent } from './profile-parent-component/profile-parent-component.component';
import { ProfileTitleComponent } from './profile-parent-component/profile-title/profile-title.component';
import { ProfileButtonsComponent } from './profile-parent-component/profile-buttons/profile-buttons.component';
import { ProfileRoutingModule } from './profile-routing.module';
@NgModule({
  declarations: [ ProfileDetailsComponent, ProfileEditComponent, ApplyChargesComponent, SocietyInfoTitleComponent, AddressComponent, AccountComponent, TermsComponent, ProfileParentComponentComponent, ProfileTitleComponent, ProfileButtonsComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
