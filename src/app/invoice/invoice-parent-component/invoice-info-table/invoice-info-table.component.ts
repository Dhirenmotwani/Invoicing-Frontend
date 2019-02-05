import { Component, OnInit } from '@angular/core';
import { InvoiceparentserviceService } from '../invoiceparentservice.service';
@Component({
  selector: 'app-invoice-info-table',
  templateUrl: './invoice-info-table.component.html',
  styleUrls: ['./invoice-info-table.component.css']
})
export class InvoiceInfoTableComponent implements OnInit {

  constructor(public invoiceService: InvoiceparentserviceService) { }

  ngOnInit() {
  }

}
