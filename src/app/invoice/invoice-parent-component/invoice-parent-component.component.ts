import { Component, OnInit } from '@angular/core';
import { InvoiceparentserviceService} from './invoiceparentservice.service'
@Component({
  selector: 'app-invoice-parent-component',
  templateUrl: './invoice-parent-component.component.html',
  styleUrls: ['./invoice-parent-component.component.css']
})
export class InvoiceParentComponentComponent implements OnInit {

  constructor(public invoiceService: InvoiceparentserviceService) { }

  ngOnInit() {
  }

}
