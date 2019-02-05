import { Component, OnInit } from '@angular/core';
import { InvoiceparentserviceService } from '../invoiceparentservice.service';
@Component({
  selector: 'app-paid',
  templateUrl: './paid.component.html',
  styleUrls: ['./paid.component.css']
})
export class PaidComponent implements OnInit {

  constructor(public invoiceService: InvoiceparentserviceService) { }

  ngOnInit() {
  }

}
