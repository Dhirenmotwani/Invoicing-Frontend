import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from './serviceparentservice.service';
@Component({
  selector: 'app-service-parent-component',
  templateUrl: './service-parent-component.component.html',
  styleUrls: ['./service-parent-component.component.css']
})
export class ServiceParentComponentComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
