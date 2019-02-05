import { Component, OnInit } from '@angular/core';
import { ProfileparentserviceService } from '../profileparentservice.service'
@Component({
  selector: 'app-profile-buttons',
  templateUrl: './profile-buttons.component.html',
  styleUrls: ['./profile-buttons.component.css']
})
export class ProfileButtonsComponent implements OnInit {

  constructor(public profileService: ProfileparentserviceService) { }

  ngOnInit() {
  }

}
