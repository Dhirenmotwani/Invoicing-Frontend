import { Component, OnInit } from '@angular/core';
import { ProfileparentserviceService } from './profileparentservice.service';
@Component({
  selector: 'app-profile-parent-component',
  templateUrl: './profile-parent-component.component.html',
  styleUrls: ['./profile-parent-component.component.css']
})
export class ProfileParentComponentComponent implements OnInit {

  constructor(public profileService: ProfileparentserviceService) { }

  ngOnInit() {
  }

}
