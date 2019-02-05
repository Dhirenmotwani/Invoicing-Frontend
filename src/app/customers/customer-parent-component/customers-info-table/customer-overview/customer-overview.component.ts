import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../customerservice.service'
@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.css']
})
export class CustomerOverviewComponent implements OnInit {

  constructor(public customerService: CustomerserviceService) { }

  ngOnInit() {
  }

}
