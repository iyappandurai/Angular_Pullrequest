import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectsComponent } from './add-projects/add-projects.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectTableComponent } from './project-table/project-table.component';
import { ProjectsComponent } from './projects/projects.component';



import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import {NewProjectsRoutingModule} from './new-projects-routing.module'

@NgModule({
  declarations: [AddProjectsComponent, ProjectFormComponent, ProjectTableComponent, ProjectsComponent],
  entryComponents:[
    AddProjectsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    NewProjectsRoutingModule
  ]
})
export class NewProjectsModule { }
