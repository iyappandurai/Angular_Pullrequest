import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.css']
})
export class ProjectTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title','startDate','endDate','action'];
  constructor(public projectService:ProjectsService) { }

  ngOnInit() {
    debugger;
    this.projectService.GetProjects()
    .subscribe((projects)=>{
      debugger
    })
    ;
  }
  onDelete(id:number){
    this.projectService.DeleteProject(id);
  }

}

