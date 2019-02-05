import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from '../../serviceparentservice.service';
@Component({
  selector: 'app-template-overview',
  templateUrl: './template-overview.component.html',
  styleUrls: ['./template-overview.component.css']
})
export class TemplateOverviewComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
