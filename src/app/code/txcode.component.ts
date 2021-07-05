import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ApiChoteService } from '../service/api-chote.service';

@Component({
  selector: 'app-txcode',
  templateUrl: './txcode.component.html',
  styleUrls: ['./txcode.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TxcodeComponent implements OnInit {

  constructor(private ps:ApiChoteService) { }
  gtx:any =[];
  stx=[];
txcodes =[];
  ngOnInit(): void {
 this.ps.getRout('txcodes').then((x:any) => {
  this.txcodes = x["message"];
  //console.log(this.txcodes);
  const g = this.txcodes.map((x) => {
    return {gcode:x['gcode'],gwork:x['gwork']};
  });
 // let gtx1 = Array.from(new Set(g));
  //console.log("g = ",gtx1);
  //this.gtx = gtx1.map((x)=>{
//return gtx1.find(a=>a.gcode ==x.gcode)
//  });
this.gtx =g.filter((v,i,a)=>a.findIndex(t=>(t.gcode === v.gcode && t.gwork===v.gwork))===i);
//this.gtx =g.filter((v,i,a)=>a.findIndex(t=>(t.gcode === v.gcode && t.gwork===v.gwork))===i);
  //this.gtx.map()
 //   console.log( [...new Set(this.txcodes.map((x) =>{   return{gcode:x['gcode'],gwork:x['gwork']};}))]);
  // 
 // console.log("gtx = ",this.gtx);
});
  }

}
