import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import {ToolbarModule} from 'primeng/toolbar';
import {CalendarModule} from 'primeng/calendar';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { thLocale } from 'ngx-bootstrap/locale';

defineLocale('th', thLocale);
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [],
  imports: [
    TableModule, MenuModule,CalendarModule,TabsModule,
    CommonModule,MessagesModule,MessageModule,DropdownModule,
    FormsModule , BsDatepickerModule.forRoot()
  ],
  exports: [ButtonModule,ToolbarModule,
    TableModule, MenuModule,
    CommonModule,MessagesModule,MessageModule,DropdownModule,
    FormsModule ,CalendarModule, TabsModule , BsDatepickerModule
  ],
})
export class ShareModule { }
