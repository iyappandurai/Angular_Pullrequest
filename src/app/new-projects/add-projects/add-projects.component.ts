import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import { Project } from 'src/app/Project';
import {ProjectsService} from 'src/app/projects.service'
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})
export class AddProjectsComponent implements OnInit {
  project:Project;
  group:FormGroup;
  constructor(private dialogRef: MatDialogRef<AddProjectsComponent>,public proService:ProjectsService,private builder:FormBuilder,private http:HttpClient) { 
this.project=new Project(null,null,null,null,null);
    this.group=this.builder.group({
      title:['',[Validators.required,Validators.minLength(6)],this.projectExistsValidator.bind(this)],
      startDate:['',[Validators.required]],
      endDate:['',[Validators.required]]
    })
  }
  get title() {
    return this.group.get('title');
  }

  get startDate() {
    return this.group.get('startDate');
  }

  get endDate() {
    return this.group.get('endDate');
  }
  ngOnInit() {
  }
  onCancel(){
    this.dialogRef.close();
  }

  onSave(){
    this.dialogRef.close();
    debugger;
this.project.title=this.group.value.title;
this.project.startDate=this.group.value.startDate;
this.project.endDate=this.group.value.endDate;
this.proService.AddProjects(this.project);
  }
  projectExistsValidator(control: AbstractControl): Observable<any|null> {
    const { value } = control;
    return this.http.get<any[]>(`http://localhost:3000/projects?title=${value}`)
      .pipe(
        map(users => {
          if (users.length) {
            return {
              projectExists: true,
            }
          }

          return null;
        })
      );
  }

}

