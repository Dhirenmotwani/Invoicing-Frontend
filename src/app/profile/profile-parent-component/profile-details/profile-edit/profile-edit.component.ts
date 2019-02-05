import { Component, OnInit } from '@angular/core';
import { ProfileparentserviceService } from '../../profileparentservice.service'

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(public profileService: ProfileparentserviceService) { }

  ngOnInit() {
  }

}
