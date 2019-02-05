import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from '../serviceparentservice.service';
@Component({
  selector: 'app-service-template-buttons',
  templateUrl: './service-template-buttons.component.html',
  styleUrls: ['./service-template-buttons.component.css']
})
export class ServiceTemplateButtonsComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
