import { Component, OnInit } from '@angular/core';
import { ApiChoteService } from '../service/api-chote.service';

@Component({
  selector: 'app-txcode',
  templateUrl: './txcode.component.html',
  styleUrls: ['./txcode.component.scss']
})
export class TxcodeComponent implements OnInit {

  constructor(private ps:ApiChoteService) { }
txcodes =[];
  ngOnInit(): void {
 this.ps.getRout('txcodes').then((x:any) => {
  this.txcodes = x["message"];
  console.log(this.txcodes);
  
});
  }

}
