import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CornerProfileComponent } from './corner-profile/corner-profile.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CustomerParentComponentComponent } from './customers/customer-parent-component/customer-parent-component.component';
import { InvoiceParentComponentComponent } from './invoice/invoice-parent-component/invoice-parent-component.component';
import { ProfileParentComponentComponent } from './profile/profile-parent-component/profile-parent-component.component';
import { ServiceParentComponentComponent } from './service/service-parent-component/service-parent-component.component';
import { TitleComponent } from './customers/customer-parent-component/title/title.component';
import { CustomersButtonsComponent } from './customers/customer-parent-component/customers-buttons/customers-buttons.component';
import { CustomersInfoTableComponent } from './customers/customer-parent-component/customers-info-table/customers-info-table.component';
import { ProfileTitleComponent } from './profile/profile-parent-component/profile-title/profile-title.component'
import { ProfileDetailsComponent } from './profile/profile-parent-component/profile-details/profile-details.component'
import { SocietyInfoTitleComponent } from './profile/profile-parent-component/society-info-title/society-info-title.component';
import { ProfileButtonsComponent} from './profile/profile-parent-component/profile-buttons/profile-buttons.component';
import { AccountComponent } from './profile/profile-parent-component/account/account.component';
import { AddressComponent } from './profile/profile-parent-component/address/address.component';
import { TermsComponent } from './profile/profile-parent-component/terms/terms.component';
import { ApplyChargesComponent } from './profile/profile-parent-component/apply-charges/apply-charges.component'
import { AddClientPopupComponent } from './customers/customer-parent-component/customers-buttons/add-client-popup/add-client-popup.component';
import { ImportClientsComponent } from './customers/customer-parent-component/customers-buttons/import-clients/import-clients.component';
import { CustomerOverviewComponent } from './customers/customer-parent-component/customers-info-table/customer-overview/customer-overview.component';
import { PersonEditServiceComponent } from './service/service-parent-component/template-table/template-overview/person-edit-service/person-edit-service.component';
import { AddServiceButtonComponent } from './service/service-parent-component/add-service-button/add-service-button.component';
import { ServiceTableComponent } from './service/service-parent-component/service-table/service-table.component';
import { ServiceTemplateButtonsComponent } from  './service/service-parent-component/service-template-buttons/service-template-buttons.component';
import { TemplateTableComponent } from './service/service-parent-component/template-table/template-table.component';
import { ServiceTitleComponent } from './service/service-parent-component/service-title/service-title.component';
import { ExportPopupComponent } from './invoice/invoice-parent-component/export-popup/export-popup.component';
import { MakeInvoiceComponent } from './invoice/invoice-parent-component/make-invoice/make-invoice.component';
import {InvoiceTitleComponent} from './invoice/invoice-parent-component/invoice-title/invoice-title.component';
import {InvoiceInfoTableComponent} from './invoice/invoice-parent-component/invoice-info-table/invoice-info-table.component';
import {CustomerDetailsComponent} from './invoice/invoice-parent-component/invoice-info-table/customer-details/customer-details.component';
import {IndividualCustomerInfoTableComponent} from './invoice/invoice-parent-component/invoice-info-table/individual-customer-info-table/individual-customer-info-table.component';
import {CustomerInfoTableButtonComponent} from './invoice/invoice-parent-component/invoice-info-table/individual-customer-info-table/customer-info-table-button/customer-info-table-button.component';
import {MarkPaidComponent} from './invoice/invoice-parent-component/invoice-info-table/individual-customer-info-table/customer-info-table-button/mark-paid/mark-paid.component';
import {FinalInvoiceComponent} from './invoice/invoice-parent-component/invoice-info-table/individual-customer-info-table/final-invoice/final-invoice.component';
import {OverdueComponent} from './invoice/invoice-parent-component/overdue/overdue.component';
import {PaidComponent} from './invoice/invoice-parent-component/paid/paid.component';
import {TotalOutstandingComponent} from './invoice/invoice-parent-component/total-outstanding/total-outstanding.component';
import { ViewAllComponent} from './invoice/invoice-parent-component/view-all/view-all.component';
import{ ProfileEditComponent} from './profile/profile-parent-component/profile-details/profile-edit/profile-edit.component';
import{ ServicePopupComponent} from './service/service-parent-component/service-table/service-popup/service-popup.component';
import{ ServicesEditComponent } from './service/service-parent-component/template-table/template-overview/services-edit/services-edit.component';
import{ TemplateInfoEditComponent } from './service/service-parent-component/template-table/template-overview/template-info-edit/template-info-edit.component';
import{ TemplateOverviewComponent } from './service/service-parent-component/template-table/template-overview/template-overview.component';
import { PersonEditComponent } from './customers/customer-parent-component/customers-info-table/customer-overview/person-edit/person-edit.component';
import { ServiceeditpoupComponent } from './service/service-parent-component/service-table/serviceeditpoup/serviceeditpoup.component';

@NgModule({
  declarations: [
    MakeInvoiceComponent,
    PersonEditServiceComponent,
    TemplateOverviewComponent,
    ServicesEditComponent,
    TemplateInfoEditComponent,
    ServicePopupComponent,
    ProfileEditComponent,
    AppComponent,
    CornerProfileComponent,
    SearchBarComponent,
    InvoiceParentComponentComponent,
    ProfileParentComponentComponent,
    ServiceParentComponentComponent,
    CustomerParentComponentComponent,
    TitleComponent,
    CustomersInfoTableComponent,
    CustomersButtonsComponent,
    CustomerOverviewComponent,
    ImportClientsComponent,
    AddClientPopupComponent,
    PersonEditComponent,
    ProfileTitleComponent,
    ProfileDetailsComponent,
    SocietyInfoTitleComponent,
    ProfileButtonsComponent,
    AccountComponent,
    AddressComponent,
    TermsComponent,
    ApplyChargesComponent,
    AddServiceButtonComponent,
    ServiceTableComponent,
    ServiceTemplateButtonsComponent,
    ServiceTitleComponent,
    TemplateTableComponent,
    InvoiceInfoTableComponent,
    CustomerDetailsComponent,
    IndividualCustomerInfoTableComponent,
    CustomerInfoTableButtonComponent,
    MarkPaidComponent,
    FinalInvoiceComponent,
    OverdueComponent,
    PaidComponent,
    TotalOutstandingComponent,
    ViewAllComponent,
    InvoiceTitleComponent,
    ExportPopupComponent,
    ServiceeditpoupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
