import { AfterContentInit, Component, ElementRef, inject, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { isPlatformBrowser } from '@angular/common';
import { NytranslateService } from '../../core/services/nytranslate.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-node',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav-node.component.html',
  styleUrl: './nav-node.component.css'
})
export class NavNodeComponent implements OnInit , AfterContentInit{
  private readonly _UserService=inject(UserService);
  private readonly _NytranslateService=inject(NytranslateService);
   readonly _TranslateService=inject(TranslateService);
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  private readonly _Renderer2=inject(Renderer2);
    @ViewChild ('navbarSupportedContent') navbarSupportedContent!:ElementRef
ngOnInit(): void {
if (isPlatformBrowser(this._PLATFORM_ID)) {
  if(localStorage.getItem('lang')!=null){
    this._NytranslateService.useChoiceLang();
        } 
}}
ngAfterContentInit(): void {
  if (isPlatformBrowser(this._PLATFORM_ID)) {
    if (localStorage.getItem("gender")!==null) {
    if (localStorage.getItem("gender")=="boy") {
     this.boy();
     }
    else if (localStorage.getItem("gender")=="girl") {
      this.girl();
    }
  }
  } 
}
boy(){
  localStorage.setItem("gender","boy");
  const body = document.getElementById("body");
  const addmodal = document.getElementById("addmodal");
  this._Renderer2.removeClass(body,'girl-light')
  this._Renderer2.addClass(body,'boy-light')
  this._Renderer2.removeClass(addmodal,'girl-light')
  this._Renderer2.addClass(addmodal,'boy-light')
}
girl(){
  localStorage.setItem("gender","girl")
  const body = document.getElementById("body");
  const addmodal = document.getElementById("addmodal");
  this._Renderer2.removeClass(body,'boy-light')
  this._Renderer2.addClass(body,'girl-light')
  this._Renderer2.removeClass(addmodal,'boy-light')
  this._Renderer2.addClass(addmodal,'girl-light')
}
logout(){
  this._UserService.logout();
}
lang(language:string){
this._NytranslateService.changeLang(language);
}
closeIteamModal(){
  if (this.navbarSupportedContent.nativeElement.classList.contains("show")) {
    this._Renderer2.removeClass(this.navbarSupportedContent.nativeElement,'show')  
}}
}
