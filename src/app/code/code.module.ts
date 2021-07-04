import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share/share.module';

import { CodeRoutingModule } from './code-routing.module';
import { TxcodeComponent } from './txcode.component';


@NgModule({
  declarations: [
    TxcodeComponent
  ],
  imports: [
    CommonModule,ShareModule,
    CodeRoutingModule
  ]
})
export class CodeModule { }
