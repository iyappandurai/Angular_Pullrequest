import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormArray,Validator } from '@angular/forms';
import {ProjectsService} from 'src/app/projects.service';



@Component({
  selector: 'app-epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.css']
})
export class EpicsComponent implements OnInit {
//group:FormGroup;
//farray:FormArray;
epics:any;
  constructor(public proService:ProjectsService,private builder: FormBuilder,) { 
    //this.farray=this.builder.array([]);
    // this.group = this.builder.group({
   
    //   epics: this.builder.array([])
    //   });
    this.epics=[];
  }
  // toArray(answers: object) {
  //   return Object.keys(answers).map(key => answers[key])
  // }
  
  ngOnInit() {
    debugger
    this.proService.GetProjects()
    .subscribe((projects)=>{
      //this.createEpic();
    });
 
    // this.proService.projects.filter(t=>{
    //   const id=t.id+'';
    //   //this.group.addControl(id:this.builder.group({}));
    // })
   
  }
  createEpic():void{
    this.proService.projects.forEach((proj,i)=>{
      const obj={
        id:proj.id,
        title:proj.title,

        epic:[{
          name:"",
          priority:""
        }]
      }
this.epics.push(obj);
debugger
    })
  }
  // get epics(): FormArray {
  //   return this.group.get('epics') as FormArray;
  // }
   onAddEpic(id:number): void {
  // this.epics.forEach((element,i) => {
    // if(element.id==id){
     //  element.epic.push({
     //    name:"",
      //   priority:""
      // })
     //}
   //});
   this.proService.projects.forEach((p,i)=>{
     if(p.id==id){
       debugger
       p.epics.push({name:"",priority:"",isSave:"No"})
     }
   })
    }

    onDeleteEpic(index: number,proId:number): void {
      // this.epics.forEach((element,i )=> {
      //   if(element.id==proId){
      //     debugger
      //     element.epic.splice(index,1);
      //   }
      // });
      this.proService.projects.forEach((element,i )=> {
        if(element.id==proId){
          debugger
          element.epics.splice(index,1);
        }
      });
    }
    onSave(){
       this.proService.projects.forEach((p,i)=>{
        p.epics.forEach((ep,j)=>{
          debugger
          if(ep["name"]=="") 
          this.proService.projects[i].epics.splice(j,1);
          else
          ep["isSave"]="Yes";
         })
      })
      this.proService.EpicsSave(this.proService.projects);
    }

}
