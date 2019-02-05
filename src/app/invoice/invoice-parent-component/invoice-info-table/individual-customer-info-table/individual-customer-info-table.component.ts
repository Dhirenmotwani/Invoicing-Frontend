import { Component, OnInit } from '@angular/core';
import { InvoiceparentserviceService } from '../../invoiceparentservice.service';
@Component({
  selector: 'app-individual-customer-info-table',
  templateUrl: './individual-customer-info-table.component.html',
  styleUrls: ['./individual-customer-info-table.component.css']
})
export class IndividualCustomerInfoTableComponent implements OnInit {

  constructor(public invoiceService: InvoiceparentserviceService) { }

  ngOnInit() {
  }

}
