import { Component, OnInit } from '@angular/core';
import { InvoiceparentserviceService } from '../invoiceparentservice.service'
@Component({
  selector: 'app-make-invoice',
  templateUrl: './make-invoice.component.html',
  styleUrls: ['./make-invoice.component.css']
})
export class MakeInvoiceComponent implements OnInit {

  constructor(public invoiceService: InvoiceparentserviceService) { }

  ngOnInit() {
  }

}
