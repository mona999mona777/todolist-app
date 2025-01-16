import { Component, inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnDestroy{
private readonly _UserService=inject(UserService);
private readonly _FormBuilder=inject(FormBuilder);
  private readonly _Router=inject(Router);
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  messgerror:string='';
  messsuccess:string='';
  isloading:boolean=false;
  unsub!:Subscription;
  singUp:FormGroup=this._FormBuilder.group({
    name:[null,[Validators.required, Validators.minLength(2)]],
    email:[null,[Validators.required, Validators.email]],
    password:[null,[Validators.required,Validators.pattern(/^\w{3,}$/)]],
    age:[null,[Validators.required,Validators.min(20)]],
    phone:[null,[Validators.required,Validators.pattern(/^01[125][0-9]{8}$/)]],
});
singUpfunction(){
  // console.log(this.singUp);
  if(this.singUp.valid){
    this.isloading=true
      this.unsub=this._UserService.singup(this.singUp.value).subscribe({
                next:(res)=>{
                  this.isloading=false;
                  this.messsuccess=res.msg; 
                  this.messgerror=""
               if(res.msg== "done"){
                setTimeout(() => {
                  this._Router.navigate(['/signin']);
                  }, 1000);               }
                },
                error:(err:HttpErrorResponse)=>{
                  console.log(err);
                  this.isloading=false
                this.messgerror=err.error.msg;
                this.messsuccess="";
                }
          });
  }
  else{
    this.singUp.markAllAsTouched();
  }
}
LangText(){
  if (isPlatformBrowser(this._PLATFORM_ID)) {
  if (localStorage.getItem("lang")!=null) {
       if (localStorage.getItem("lang")=='en') {
        return true;
       }
       else if (localStorage.getItem("lang")=='ar') {
        return false;
       }
  } 
  else if (localStorage.getItem("lang")==null) {
               return true;            
      } 
  }
        return false
}
ngOnDestroy(): void {
    this.unsub?.unsubscribe()
}
}
