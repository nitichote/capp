import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiChoteService } from "../service/api-chote.service";
import {MenuItem,Message,MessageService} from 'primeng/api';
import { DataService } from "../service/data.service";
import { Subscription } from 'rxjs';
//import { Paginator } from 'primeng/paginator';
//import { LazyLoadEvent } from 'primeng/common/lazyloadevent';
@Component({
  selector: 'app-pt',
  templateUrl: './pt.component.html',
  styleUrls: ['./pt.component.scss'],
  providers: [MessageService]
})

export class PtComponent implements OnInit {

  constructor(private data: DataService,private _http: HttpClient,private ps: ApiChoteService, private messageService: MessageService) { }
  cities!: City[];
  message!:string;
  subscription!: Subscription;
  selectedCity!: City;
  selectedCars=[];
  hn ="11";
  msgs1!: Message[];
  pts=[];
  txtSearch="rrrrrr";
  rows = 10;
  paginator=true;
  showDoctor(){
    let xx = this.data.getValue();
    console.log(xx);
    //console.log(xx.);
    
  }
  setDoctor(){
    this.data.doctor = {doctor_id:2345,docname:'สมหมาย'};
  }
doSearch(){
  const s =this.txtSearch.trim();
  console.log(this.txtSearch);
  
  if(s.length >2){
  this.ps.getpt(s).then((x:any) => {
    this.pts = x["message"];
    console.log(this.pts);
    
  });
}
else{
 
  this.messageService.add({severity:'success', summary:'ป้อนคำค้นไม่เพียงพอ', detail:'ความยาวต้องมากกว่า 2 ตัวอักษรชึ้นไป'});
  console.log("dff");
}

}
showCar(){
  console.log(this.selectedCars);
  
} 
items!: MenuItem[];
currentRowData!:any;
public onClickMenu(rowData: any) { 
  this.currentRowData = rowData; 
  console.log(rowData);
  
}
update(){}
delete(){}
addPt(){
  console.log("add");
  this.isrpanel =! this.isrpanel;
}
isrpanel=false;
ngOnDestroy() {
  this.subscription.unsubscribe();
}
  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message);

    this.cities = [
      {name: 'จัดการ', code: '0'},
      {name: 'ลบ', code: 'del'},
      {name: 'แก้ไขคำนำหน้า', code: 'editTitle'},
  
  ];
 
  this.items = [{
    label: 'ดำเนินการ',
    items: [
      {
        label: 'เพิ่มการรักษา',
        icon: 'pi pi-refresh',
        command: (e:Event) => {
          console.log(e);
          
            this.update();
        }
    },
      {
        label: 'ดูรายละเอียด',
        icon: 'pi pi-refresh',
        command: () => {
            this.update();
        }
    },{
        label: 'แก้ไข',
        icon: 'pi pi-refresh',
        command: () => {
            this.update();
        }
    },
    {
        label: 'ลบ',
        icon: 'pi pi-times',
        command: () => {
            this.delete();
        }
    }
    ]},
    {
        label: 'ดูประวัติ',
        items: [{
            label: 'ทั้งหมด',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
        },
        {
            label: 'เฉพาะครั้งนี้',
            icon: 'pi pi-upload'
        }
    ]}
];
  }

}
interface City {
  name: string,
  code: string
}