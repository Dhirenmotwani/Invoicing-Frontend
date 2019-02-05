import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CustomersButtonServiceService {
  displayimportclient:boolean=false;
  displayaddclient:boolean=false;
  importclientopen(){
    this.displayimportclient=true;
    this.displayaddclient=false;
  }
  importclientclose(){
    this.displayimportclient=false;
  }
  addclientopen(){
    this.displayaddclient=true;
    this.displayimportclient=false;
  }
  addclientclose(){
    this.displayaddclient=false;
  }
  constructor() {

  }
}
