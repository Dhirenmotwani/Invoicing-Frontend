import { Component, OnInit } from '@angular/core';
import { ProfileparentserviceService } from '../profileparentservice.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {
 homeimagepath:string;
  constructor(public profileService: ProfileparentserviceService) { }

  ngOnInit() {
    this.homeimagepath='/assets/images/home.png'
  }

}
