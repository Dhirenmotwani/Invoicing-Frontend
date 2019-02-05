import { Component, OnInit } from '@angular/core';
import { InvoiceparentserviceService } from '../invoiceparentservice.service';
@Component({
  selector: 'app-total-outstanding',
  templateUrl: './total-outstanding.component.html',
  styleUrls: ['./total-outstanding.component.css']
})
export class TotalOutstandingComponent implements OnInit {

  constructor(public invoiceService: InvoiceparentserviceService) { }

  ngOnInit() {
  }

}
