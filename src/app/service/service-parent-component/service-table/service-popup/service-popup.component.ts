import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from '../../serviceparentservice.service';
@Component({
  selector: 'app-service-popup',
  templateUrl: './service-popup.component.html',
  styleUrls: ['./service-popup.component.css']
})
export class ServicePopupComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
