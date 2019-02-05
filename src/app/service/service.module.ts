import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddServiceButtonComponent } from './service-parent-component/add-service-button/add-service-button.component';
import { ServiceTemplateButtonsComponent } from './service-parent-component/service-template-buttons/service-template-buttons.component';
import { ServiceTableComponent } from './service-parent-component/service-table/service-table.component';
import { TemplateTableComponent } from './service-parent-component/template-table/template-table.component';
import { TemplateOverviewComponent } from './service-parent-component/template-table/template-overview/template-overview.component';
import { ServicesEditComponent } from './service-parent-component/template-table/template-overview/services-edit/services-edit.component';
import { PersonEditServiceComponent } from './service-parent-component/template-table/template-overview/person-edit-service/person-edit-service.component';
import { TemplateInfoEditComponent } from './service-parent-component/template-table/template-overview/template-info-edit/template-info-edit.component';
import { ServicePopupComponent } from './service-parent-component/service-table/service-popup/service-popup.component';
import { ServiceParentComponentComponent } from './service-parent-component/service-parent-component.component';
import { ServiceTitleComponent } from './service-parent-component/service-title/service-title.component';
import { ServiceeditpoupComponent } from './service-parent-component/service-table/serviceeditpoup/serviceeditpoup.component';

@NgModule({
  declarations: [AddServiceButtonComponent, ServiceTemplateButtonsComponent, ServiceTableComponent, TemplateTableComponent, TemplateOverviewComponent, ServicesEditComponent, PersonEditServiceComponent, TemplateInfoEditComponent, ServicePopupComponent, ServiceParentComponentComponent, ServiceTitleComponent, ServiceeditpoupComponent],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
