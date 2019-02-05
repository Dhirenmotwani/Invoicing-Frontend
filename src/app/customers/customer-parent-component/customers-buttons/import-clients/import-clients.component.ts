import { Component, OnInit } from '@angular/core';
import { CustomersButtonServiceService } from '../customers-button-service.service';
@Component({
  selector: 'app-import-clients',
  templateUrl: './import-clients.component.html',
  styleUrls: ['./import-clients.component.css']
})
export class ImportClientsComponent implements OnInit {

  constructor(public customerbuttonService: CustomersButtonServiceService) { }

  ngOnInit() {
  }

}
