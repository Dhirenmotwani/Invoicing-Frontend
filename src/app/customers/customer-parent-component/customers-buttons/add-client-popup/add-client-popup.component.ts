import { Component, OnInit } from '@angular/core';
import { CustomersButtonServiceService } from '../customers-button-service.service';

@Component({
  selector: 'app-add-client-popup',
  templateUrl: './add-client-popup.component.html',
  styleUrls: ['./add-client-popup.component.css']
})
export class AddClientPopupComponent implements OnInit {

  constructor(public customerbuttonService: CustomersButtonServiceService) { }


  ngOnInit() {
  }

}
