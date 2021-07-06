import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share/share.module';

import { CodeRoutingModule } from './code-routing.module';
import { TxcodeComponent } from './txcode.component';

import { TxgroupPipePipe } from '../pipe/txgroup-pipe.pipe';




@NgModule({
  declarations: [TxgroupPipePipe,
    TxcodeComponent],
  imports: [
    CommonModule,ShareModule,
    CodeRoutingModule
  ],
  exports:[]
})
export class CodeModule { }
