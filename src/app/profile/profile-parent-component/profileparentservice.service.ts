import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileparentserviceService {
  addressdisplay:boolean=true;
  profiledisplay:boolean=false;
  constructor() { }
  addressclose(){this.addressdisplay=false;}
  addressopen(){
    this.addressdisplay=true;
  }
  profileopen(){this.profiledisplay=true;}
  profileclose(){ this.profiledisplay=false;}
}
