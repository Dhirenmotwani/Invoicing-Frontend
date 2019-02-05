import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from '../../../serviceparentservice.service';

@Component({
  selector: 'app-person-edit-service',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditServiceComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
