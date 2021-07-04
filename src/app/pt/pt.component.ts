import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiChoteService } from "../service/api-chote.service";
import {MenuItem,Message,MessageService} from 'primeng/api';
//import { Paginator } from 'primeng/paginator';
//import { LazyLoadEvent } from 'primeng/common/lazyloadevent';
@Component({
  selector: 'app-pt',
  templateUrl: './pt.component.html',
  styleUrls: ['./pt.component.scss'],
  providers: [MessageService]
})

export class PtComponent implements OnInit {

  constructor(private _http: HttpClient,private ps: ApiChoteService, private messageService: MessageService) { }
  cities!: City[];

  selectedCity!: City;
  selectedCars=[];
  hn ="11";
  msgs1!: Message[];
  pts=[];
  txtSearch="rrrrrr";
  rows = 10;
  paginator=true;
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
update(){}
delete(){}
addPt(){
  console.log("add");
  this.isrpanel =! this.isrpanel;
}
isrpanel=false;
  ngOnInit(): void {
    this.cities = [
      {name: 'จัดการ', code: '0'},
      {name: 'ลบ', code: 'del'},
      {name: 'แก้ไขคำนำหน้า', code: 'editTitle'},
  
  ];
 
  this.items = [{
    label: 'Options',
    items: [{
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            this.update();
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            this.delete();
        }
    }
    ]},
    {
        label: 'Navigate',
        items: [{
            label: 'Angular Website',
            icon: 'pi pi-external-link',
            url: 'http://angular.io'
        },
        {
            label: 'Router',
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