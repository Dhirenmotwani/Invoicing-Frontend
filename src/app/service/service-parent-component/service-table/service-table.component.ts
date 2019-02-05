import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from '../serviceparentservice.service';
@Component({
  selector: 'app-service-table',
  templateUrl: './service-table.component.html',
  styleUrls: ['./service-table.component.css']
})
export class ServiceTableComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
