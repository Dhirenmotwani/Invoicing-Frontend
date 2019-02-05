import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class InvoiceparentserviceService {
  makeinvoicedisplay:boolean=true;
  finalinvoicedisplay:boolean=true;
  newinvoiceclientdisplay:boolean=false;
  exportclientdisplay:boolean=false;
  tabledisplay:boolean=true;
  detailsdisplay:boolean=false;
  constructor(private _location: Location) { }
  makeinvoiceclose(){this.makeinvoicedisplay=true;this.tabledisplay=true;}
  makeinvoiceopen(){ this.makeinvoicedisplay=false;this.tabledisplay=false;}
  exportclientopen(){ this.exportclientdisplay=true;}
  exportclientclose(){ this.exportclientdisplay=false;}
  newinvoiceclientopen(){ this.newinvoiceclientdisplay=true;}
  newinvoiceclientclose(){ this.newinvoiceclientdisplay=false;}
  tableopen(){this.tabledisplay=true;
    this.detailsdisplay=false;
  }
  tableclose(){ this.tabledisplay=false;
  this.detailsdisplay=false;}
  detailsopen(){this.detailsdisplay=true;}
  prevpage(){
    this._location.back();
  }
}
