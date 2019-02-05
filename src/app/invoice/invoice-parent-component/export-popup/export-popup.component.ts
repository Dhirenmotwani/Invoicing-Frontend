import { Component, OnInit } from '@angular/core';
import { InvoiceparentserviceService } from '../invoiceparentservice.service'

@Component({
  selector: 'app-export-popup',
  templateUrl: './export-popup.component.html',
  styleUrls: ['./export-popup.component.css']
})
export class ExportPopupComponent implements OnInit {

  constructor(public invoiceService: InvoiceparentserviceService) { }

  ngOnInit() {
  }

}
