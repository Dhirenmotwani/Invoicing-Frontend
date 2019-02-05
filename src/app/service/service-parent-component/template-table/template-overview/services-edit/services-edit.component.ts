import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from '../../../serviceparentservice.service';

@Component({
  selector: 'app-services-edit',
  templateUrl: './services-edit.component.html',
  styleUrls: ['./services-edit.component.css']
})
export class ServicesEditComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
