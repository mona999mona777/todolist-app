import { Component, inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnDestroy {
private readonly _UserService=inject(UserService);
private readonly _FormBuilder=inject(FormBuilder);
private readonly _Router=inject(Router);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
messgerror:string='';
messsuccess:string='';
isloading:boolean=false;
unsub!:Subscription;
singIn:FormGroup=this._FormBuilder.group({
email:[null,[Validators.required, Validators.email]],
password:[null,[Validators.required,Validators.pattern(/^\w{3,}$/)]],
});
singInfunction(){
    if(this.singIn.valid){
      this.isloading=true
        this.unsub=this._UserService.singin(this.singIn.value).subscribe({
                  next:(res)=>{
                    this.isloading=false
                    this.messsuccess=res.msg; 
                    this.messgerror=""
                 if(res.msg == "done"){
                  localStorage.setItem("NodeToken",res.token);
                  setTimeout(() => {
                    this._Router.navigate(['/node']);
                    }, 1000);
                 }
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
      this.singIn.markAllAsTouched();
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
  
