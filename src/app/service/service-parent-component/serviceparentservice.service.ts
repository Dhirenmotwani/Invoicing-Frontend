import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceparentserviceService {
  servicetabledisplay:boolean=true;
  servicepopupdisplay:boolean=false;
  servicepopdisplay:boolean=false;
  templatedisplay:boolean=false;
  informationdisplay:boolean=false;
  servicedisplay:boolean=false;
  persondisplay:boolean=false;
  constructor() { }
  informationopen(){
    this.informationdisplay=true;
    this.templatedisplay=false;
  }
  informationclose(){this.informationdisplay=false;this.templatedisplay=true;}
  serviceopen(){this.servicedisplay=true;this.templatedisplay=false;}
  serviceclose(){this.servicedisplay=false;this.templatedisplay=true;}
  personopen(){this.persondisplay=true;this.templatedisplay=false;}
  personclose(){this.persondisplay=false;this.templatedisplay=true;}

  servicepopupopen(){
    this.servicepopdisplay=false;
    this.servicepopupdisplay=true;
  }
  servicepopupclose(){ this.servicepopupdisplay=false;}
  templateclose(){ this.templatedisplay=false;}
  templateopen(){ this.templatedisplay=true;}

  servicepopopen(){
    this.servicepopdisplay=true;
    this.servicepopupdisplay=false;
  }
  servicepopclose(){ this.servicepopdisplay=false;}
  servicetableopen(){ this.servicetabledisplay=true;}
  servicetableclose(){ this.servicetabledisplay=false;}
}
