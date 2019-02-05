import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from '../serviceparentservice.service';
@Component({
  selector: 'app-template-table',
  templateUrl: './template-table.component.html',
  styleUrls: ['./template-table.component.css']
})
export class TemplateTableComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
