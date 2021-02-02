import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
//import { AddProjectsComponent } from 'src/app/add-projects/add-projects.component'
import {ProjectsService} from 'src/app/projects.service'
import {AddProjectsComponent} from '../add-projects/add-projects.component'

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor(private dialog: MatDialog,private proService:ProjectsService) { }

  ngOnInit() {
  }
  OnAddProject(){
    const dialogRef: MatDialogRef<AddProjectsComponent> = this.dialog.open(AddProjectsComponent, {
      width: '350px',
      autoFocus: false
    });

    // dialogRef.afterClosed().subscribe(project => {
    //  this.proService.AddProjects(project);
    // })


  }
}

