import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corner-profile',
  templateUrl: './corner-profile.component.html',
  styleUrls: ['./corner-profile.component.css']
})
export class CornerProfileComponent implements OnInit {
  profileimagepath:string;
  constructor() {
  this.profileimagepath='/assets/images/home.png'
}

  ngOnInit() {
  }

}
