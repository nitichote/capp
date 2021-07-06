import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtRoutingModule } from './pt-routing.module';
import { PtComponent } from './pt.component';
import { PtvisitComponent } from './ptvisit.component';
import { PttreatComponent } from './pttreat.component';
import { PtdxComponent } from './ptdx.component';
import { PtViewComponent } from './pt-view.component';
import { PtEditComponent } from './pt-edit.component';
import { PtAddComponent } from './pt-add.component';
import { ShareModule } from '../share/share/share.module';
import { CodeModule } from '../code/code.module';
// import { TxcodeComponent } from '../code/txcode.component';

@NgModule({
  declarations: [
    PtComponent,
    // TxcodeComponent,
    PtvisitComponent,
    PttreatComponent,
    PtdxComponent,
    PtViewComponent,
    PtEditComponent,
    PtAddComponent,
  ],
  imports: [ShareModule, CommonModule, PtRoutingModule, CodeModule],
})
export class PtModule {}
