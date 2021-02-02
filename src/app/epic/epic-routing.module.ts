import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EpicsComponent} from '../epic/epics/epics.component'



const routes: Routes = [
  { path: '', component: EpicsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpicRoutingModule { }