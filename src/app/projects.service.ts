import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of ,forkJoin} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Project} from './Project'
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
projects : Project[];
//project:Project;
url:string;
epicurl:string;
httpOption:object;
  constructor(private http:HttpClient,private snackBar:MatSnackBar) { 
    this.url=" http://localhost:3000/projects";
    this.epicurl=" http://localhost:3000/epics";
    this.projects=[];
    //this.project=new Project(null,null,null,null);
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
  }
  AddProjects(proj:Project){
    debugger
    this.http.post<Project>(this.url,{
      title:proj.title,
      startDate:proj.startDate,
      endDate:proj.endDate,
      epics:[]
    },this.httpOption)
    .pipe(tap((res:Project)=>{
      this.GetProjects().subscribe(s=>{});
//this.projects.push(res);
    }),
    catchError((err:Observable<any>)=>{
      
      return of([]);
    })
    )
    .subscribe((obj)=>{
this.snackBar.open("Project added successfully!","",{
  duration:3000,
  verticalPosition: 'top'
})
    })
  }

  GetProjects():Observable<any>{
    debugger
    return this.http.get<Project[]>(this.url)
    .pipe(
      catchError((err:Observable<any>)=>{
        debugger
        return of({});
      }),
      tap((obj:Project[])=>{
        debugger
      this.projects=obj;
      
      })
    )
  }
DeleteProject(id:number){
  this.http.delete(`${this.url}/`+id)
  .subscribe((res)=>{
    this.projects=this.projects.filter(p=>{
     return p.id!=id;
    })
    this.snackBar.open("Project deleted successfully!!","",{
      duration:3000,
      verticalPosition: 'top'
    })
  })
}
EpicsSave(obj:Project[]){
 
   const putCalls = obj.map(res => this.http.put<Project>(`${this.url}/${res.id}`, {
    id: res.id,
    title: res.title,
    startDate: res.startDate,
    endDate:res.endDate,
    epics: res.epics
  }, this.httpOption));

  forkJoin(putCalls).subscribe((results) => {
    this.snackBar.open("Epics added successfully!!","",{
      duration:3000,
      verticalPosition: 'top'
    })
  });
}
GetEpic():Observable<any>{
 return this.http.get<object>(this.epicurl)
}

}
