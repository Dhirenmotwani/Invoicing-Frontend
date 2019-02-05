import { Component, OnInit } from '@angular/core';
import { ServiceparentserviceService } from '../../serviceparentservice.service';
@Component({
  selector: 'app-serviceeditpoup',
  templateUrl: './serviceeditpoup.component.html',
  styleUrls: ['./serviceeditpoup.component.css']
})
export class ServiceeditpoupComponent implements OnInit {

  constructor(public serviceService: ServiceparentserviceService) { }

  ngOnInit() {
  }

}
