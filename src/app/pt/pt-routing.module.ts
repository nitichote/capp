import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PtAddComponent } from './pt-add.component';
import { PtEditComponent } from './pt-edit.component';
import { PtViewComponent } from './pt-view.component';
import { PtComponent } from './pt.component';
import { PtdxComponent } from './ptdx.component';
import { PtvisitComponent } from './ptvisit.component';

const routes: Routes = [
  { path: 'pt', component: PtComponent},
  // { path: 'ptdx', component: PtdxComponent},


  // { path: '', redirectTo: 'pt', pathMatch: 'full' },




{path:'',component:PtComponent,
children:[
  { path: 'view',
  component: PtViewComponent
  },
  { path: 'edit',
  component: PtEditComponent
  },
  { path: 'add',
  component: PtAddComponent
  },
  { path: 'ptvisit/:ptcode',
  component: PtvisitComponent
  },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PtRoutingModule { }
