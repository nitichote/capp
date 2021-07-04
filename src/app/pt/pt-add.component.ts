import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TxcodeComponent } from '../code/txcode.component';
import { ApiChoteService } from '../service/api-chote.service';

//import {NgbDateStruct, NgbCalendar, NgbDate} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-pt-add',
  templateUrl: './pt-add.component.html',
  styleUrls: ['./pt-add.component.scss']
})
export class PtAddComponent implements OnInit {

  constructor( private ps:ApiChoteService,private localeService: BsLocaleService) { this.localeService.use(this.locale);}
  locale = 'th';

pt:Pt={};
dobdate=new Date();
doSave(){
  this.pt.ptcode="aaaasaa";
  this.pt.dob = this.dobdate.toISOString().split('T')[0];
console.log(this.pt);
let c = {...this.pt};
console.log(this.dobdate.toISOString().split('T')[0]);
this.ps.insertUpdateData("pt2006","dd",this.pt)
//Object.assign(c, {key3: "value3"});
//console.log(c);

}
  ngOnInit(): void {
     // const sdate: NgbDateStruct = { year: 1789, month: 7, day: 14 }; // July, 14 1789
   // const idate: NgbDate = new NgbDate(1789, 7, 14); 
    this.pt.flname="fff";
    this.pt.address="ggg";
    this.pt.dob ='10-10-2021';
    this.pt.age =12;
    this.pt.dobstr="2011-02-03";
    console.log(this.pt.dob);
    
  }

}

export interface Pt{
flname?:string;
address?:string;
age?:number;
dob?:string;
dobstr?:string;
ptcode?:string;
}