import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {ProjectsComponent} from './projects/projects.component';
//import {EpicsComponent} from './epics/epics.component'


const routes: Routes = [
  { path: 'projects', loadChildren: () => import('./new-projects/new-projects.module').then(m=>m.NewProjectsModule)},
  { path: 'epics', loadChildren: () => import('./epic/epic.module').then(m => m.EpicModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
