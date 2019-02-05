import { Component, OnInit } from '@angular/core';
import { CustomersButtonServiceService } from './customers-button-service.service';
@Component({
  selector: 'app-customers-buttons',
  templateUrl: './customers-buttons.component.html',
  styleUrls: ['./customers-buttons.component.css']
})
export class CustomersButtonsComponent implements OnInit {

  constructor(public customerbuttonService: CustomersButtonServiceService) {

 }

     ngOnInit() {
  }


}
