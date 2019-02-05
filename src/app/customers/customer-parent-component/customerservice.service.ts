import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  overviewdisplay:boolean=false;
  persondisplay:boolean=false;
  templatedisplay:boolean=false;
  constructor() { }
  overviewopen(){ this.overviewdisplay=true;}
  overviewclose(){ this.overviewdisplay=false;}
  personopen(){
  this.persondisplay=true;
  this.overviewdisplay=false;}
  templateopen(){ this.templatedisplay=true;}
  templateclose(){ this.templatedisplay=false;}
  personclose(){ this.persondisplay=false;}
}
