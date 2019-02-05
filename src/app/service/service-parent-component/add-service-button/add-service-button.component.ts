import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from '../serviceparentservice.service'
@Component({
  selector: 'app-add-service-button',
  templateUrl: './add-service-button.component.html',
  styleUrls: ['./add-service-button.component.css']
})
export class AddServiceButtonComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
