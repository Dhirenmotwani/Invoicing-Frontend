import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerParentComponentComponent } from './customers/customer-parent-component/customer-parent-component.component';
import { InvoiceParentComponentComponent } from './invoice/invoice-parent-component/invoice-parent-component.component';
import { ProfileParentComponentComponent } from './profile/profile-parent-component/profile-parent-component.component';
import { ServiceParentComponentComponent } from './service/service-parent-component/service-parent-component.component';
import { AccountComponent } from './profile/profile-parent-component/account/account.component';
import { AddressComponent } from './profile/profile-parent-component/address/address.component';
import { TermsComponent } from './profile/profile-parent-component/terms/terms.component';
import {OverdueComponent} from './invoice/invoice-parent-component/overdue/overdue.component';
import {PaidComponent} from './invoice/invoice-parent-component/paid/paid.component';
import {TotalOutstandingComponent} from './invoice/invoice-parent-component/total-outstanding/total-outstanding.component';
import { ViewAllComponent} from './invoice/invoice-parent-component/view-all/view-all.component';
import { ServiceTableComponent } from './service/service-parent-component/service-table/service-table.component';
import { TemplateTableComponent } from './service/service-parent-component/template-table/template-table.component';
import { IndividualCustomerInfoTableComponent } from './invoice/invoice-parent-component/invoice-info-table/individual-customer-info-table/individual-customer-info-table.component';
import { FinalInvoiceComponent} from './invoice/invoice-parent-component/invoice-info-table/individual-customer-info-table/final-invoice/final-invoice.component';
import { MakeInvoiceComponent } from './invoice/invoice-parent-component/make-invoice/make-invoice.component'
const routes: Routes = [
  {path: "", redirectTo:'profile',pathMatch:'full'},
  {path: "main-invoice",component:FinalInvoiceComponent},
  {path: 'customers', component: CustomerParentComponentComponent},
  {path: 'profile', component: ProfileParentComponentComponent,
    children: [
        {path: 'account', component: AccountComponent},
        {path: 'terms', component: TermsComponent},
    ],
    // ,pathMatch:'full'
  },
  {path: 'service', component: ServiceParentComponentComponent,
    children:[
      { path:'template',component: TemplateTableComponent }
    ]},
  {path: 'invoice', component: InvoiceParentComponentComponent,
    children:[
      { path:'view-all',component:ViewAllComponent },
      { path:'customer-details',component:IndividualCustomerInfoTableComponent},
      { path:'overdue',component:OverdueComponent},
      { path:'total-outstanding',component:TotalOutstandingComponent},
      { path:'paid',component:PaidComponent },
      {path:'make-invoice',component:MakeInvoiceComponent},
      { path:'main-invoice',component:FinalInvoiceComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
