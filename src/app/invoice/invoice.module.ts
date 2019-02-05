import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverdueComponent } from './invoice-parent-component/overdue/overdue.component';
import { TotalOutstandingComponent } from './invoice-parent-component/total-outstanding/total-outstanding.component';
import { ViewAllComponent } from './invoice-parent-component/view-all/view-all.component';
import { PaidComponent } from './invoice-parent-component/paid/paid.component';
import { InvoiceInfoTableComponent } from './invoice-parent-component/invoice-info-table/invoice-info-table.component';
import { CustomerDetailsComponent } from './invoice-parent-component/invoice-info-table/customer-details/customer-details.component';
import { IndividualCustomerInfoTableComponent } from './invoice-parent-component/invoice-info-table/individual-customer-info-table/individual-customer-info-table.component';
import { FinalInvoiceComponent } from './invoice-parent-component/invoice-info-table/individual-customer-info-table/final-invoice/final-invoice.component';
import { MarkPaidComponent } from './invoice-parent-component/invoice-info-table/individual-customer-info-table/customer-info-table-button/mark-paid/mark-paid.component';
import { InvoiceParentComponentComponent } from './invoice-parent-component/invoice-parent-component.component';
import { CustomerInfoTableButtonComponent } from './invoice-parent-component/invoice-info-table/individual-customer-info-table/customer-info-table-button/customer-info-table-button.component';
import { InvoiceTitleComponent } from './invoice-parent-component/invoice-title/invoice-title.component';
import { ExportPopupComponent } from './invoice-parent-component/export-popup/export-popup.component';
import { MakeInvoiceComponent } from './invoice-parent-component/make-invoice/make-invoice.component';

@NgModule({
  declarations: [OverdueComponent, TotalOutstandingComponent, ViewAllComponent, InvoiceInfoTableComponent, CustomerDetailsComponent, IndividualCustomerInfoTableComponent, FinalInvoiceComponent, MarkPaidComponent, InvoiceParentComponentComponent, CustomerInfoTableButtonComponent, InvoiceTitleComponent, ExportPopupComponent, MakeInvoiceComponent],
  imports: [
    CommonModule
  ]
})
export class InvoiceModule { }
