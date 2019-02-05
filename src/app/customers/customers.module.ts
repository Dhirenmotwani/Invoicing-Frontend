import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './customer-parent-component/title/title.component';
import { CustomersButtonsComponent } from './customer-parent-component/customers-buttons/customers-buttons.component';
import { CustomersInfoTableComponent } from './customer-parent-component/customers-info-table/customers-info-table.component';
import { CustomerOverviewComponent } from './customer-parent-component/customers-info-table/customer-overview/customer-overview.component';
import { PersonEditComponent } from './customer-parent-component/customers-info-table/customer-overview/person-edit/person-edit.component';
import { CustomerParentComponentComponent } from './customer-parent-component/customer-parent-component.component';
import { ImportClientsComponent } from './customer-parent-component/customers-buttons/import-clients/import-clients.component';
import { AddClientPopupComponent } from './customer-parent-component/customers-buttons/add-client-popup/add-client-popup.component';
import { ChooseTemplateComponent } from './customer-parent-component/customers-info-table/customer-overview/choose-template/choose-template.component';

@NgModule({
  declarations: [CustomerParentComponentComponent,TitleComponent, CustomersButtonsComponent, CustomersInfoTableComponent, CustomerOverviewComponent, PersonEditComponent, ImportClientsComponent, AddClientPopupComponent, ChooseTemplateComponent],
  imports: [
    CommonModule
  ],
  exports:[
    TitleComponent,
    CustomersButtonsComponent,
    CustomersInfoTableComponent,
    CustomerParentComponentComponent,
    ChooseTemplateComponent,
    CommonModule
  ],
  providers:[]

})
export class CustomersModule { }
