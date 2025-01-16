import { INode } from './../../core/interfaces/inode';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NodeService } from '../../core/services/node.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
declare var $:any;
@Component({
  selector: 'app-node',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass,TranslateModule],
  templateUrl: './node.component.html',
  styleUrl: './node.component.css'
})
export class NodeComponent implements OnInit,OnDestroy {
  private readonly _FormBuilder=inject(FormBuilder);
  private readonly _NodeService=inject(NodeService);
allUserNodes:INode[]=[];
data:{}={}
unsubget!:Subscription;
unsubadd!:Subscription;
unsubdelete!:Subscription;
unsubupdate!:Subscription;
addnode:FormGroup=this._FormBuilder.group({
  title:[null,[Validators.required]],
  content:[null,[Validators.required]]
})
updatenode:FormGroup=this._FormBuilder.group({
  _id:[null],
  title:[null,[Validators.required]],
  content:[null,[Validators.required]]
})
ngOnInit(): void {
  this.getUserNode();
}
getUserNode(){
  this.unsubget=this._NodeService.getUserNode().subscribe({
    next:(res)=>{
      this.allUserNodes=res.notes;
    },
    error:(err:HttpErrorResponse)=>{
      if (err.error.msg== 'not notes found') {
        this.allUserNodes=[];
      }
      else{
        console.log("getNodeError",err);
      }
    }
  })
}
addnodes(){
if(this.addnode.valid){
  this.unsubadd=this._NodeService.addNode(this.addnode.value).subscribe({
    next:(res)=>{
      this.addnode.reset();
      $('#exampleModal').modal("hide");
      this.getUserNode();
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }
  })
}
else{
  this.addnode.markAllAsTouched();
}
}
deleteNode(id:string){
    this.unsubdelete=this._NodeService.deleteNode(id).subscribe({
      next:(res)=>{
        this.getUserNode();
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
}
setvalues(nodedata:INode){
  this.updatenode.patchValue(nodedata);
}
updateNode(){
 if(this.updatenode.valid){
  const {_id, title ,content}=this.updatenode.value;
  this.unsubupdate=this._NodeService.updateNote(_id ,{"title":title, "content":content}).subscribe({
  next:(res)=>{
  $('#updateexampleModal').modal("hide");
    this.getUserNode();
  },
  error:(err:HttpErrorResponse)=>{
    console.log(err);
  }
})
 }
 else{
  this.updatenode.markAllAsTouched();
 }
}
ngOnDestroy(): void {
  this.unsubget?.unsubscribe;
  this.unsubadd?.unsubscribe;
  this.unsubdelete?.unsubscribe;
  this.unsubupdate?.unsubscribe;
}
}

