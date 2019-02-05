import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from '../../../serviceparentservice.service';

@Component({
  selector: 'app-template-info-edit',
  templateUrl: './template-info-edit.component.html',
  styleUrls: ['./template-info-edit.component.css']
})
export class TemplateInfoEditComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
