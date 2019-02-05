import { Component } from '@angular/core';
import { ProfileparentserviceService } from './profile/profile-parent-component/profileparentservice.service';
import { InvoiceparentserviceService } from './invoice/invoice-parent-component/invoiceparentservice.service';
import { ServiceparentserviceService } from './service/service-parent-component/serviceparentservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarimagepath: string ;
  constructor(public profileService: ProfileparentserviceService,public serviceService: ServiceparentserviceService,public invoiceService: InvoiceparentserviceService){
    this.sidebarimagepath='/assets/images/logo1.png';
  }
}
