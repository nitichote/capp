import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dt: DataService) { }
setDoctor(){
this.dt.doctor ={doc_id:2,docname:"นิติโชติ"}

}
  ngOnInit(): void {
  }

}
