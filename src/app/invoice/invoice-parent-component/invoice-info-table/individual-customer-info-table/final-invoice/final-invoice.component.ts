import { Component, OnInit } from '@angular/core';
import { InvoiceparentserviceService} from '../../../invoiceparentservice.service';
@Component({
  selector: 'app-final-invoice',
  templateUrl: './final-invoice.component.html',
  styleUrls: ['./final-invoice.component.css']
})
export class FinalInvoiceComponent implements OnInit {

  constructor(public invoiceService: InvoiceparentserviceService) { }

  ngOnInit() {
  }

}
