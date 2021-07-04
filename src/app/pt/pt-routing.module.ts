import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtAddComponent } from './pt-add.component';
import { PtEditComponent } from './pt-edit.component';
import { PtViewComponent } from './pt-view.component';
import { PtComponent } from './pt.component';

const routes: Routes = [ {
  path: '',
  component: PtComponent
},
{ path: 'view',
component: PtViewComponent
},
{ path: 'edit',
component: PtEditComponent
},
{ path: 'add',
component: PtAddComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtRoutingModule { }
