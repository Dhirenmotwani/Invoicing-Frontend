import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../customerservice.service';

@Component({
  selector: 'app-customers-info-table',
  templateUrl: './customers-info-table.component.html',
  styleUrls: ['./customers-info-table.component.css']
})
export class CustomersInfoTableComponent implements OnInit {

  constructor(public customerService: CustomerserviceService) { }

  ngOnInit() {
  }

}
