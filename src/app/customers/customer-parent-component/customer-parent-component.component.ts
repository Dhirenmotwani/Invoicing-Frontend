import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from  './customerservice.service';
@Component({
  selector: 'app-customer-parent-component',
  templateUrl: './customer-parent-component.component.html',
  styleUrls: ['./customer-parent-component.component.css'],
})
export class CustomerParentComponentComponent implements OnInit {

  constructor(public customerService: CustomerserviceService) { }

  ngOnInit() {
  }

}
