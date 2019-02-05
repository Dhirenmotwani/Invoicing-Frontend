import { Component, OnInit } from '@angular/core';
import { CustomerserviceService } from '../../../customerservice.service'

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  constructor(public customerService: CustomerserviceService) { }

  ngOnInit() {
  }

}
