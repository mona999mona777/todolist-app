import { Component, ElementRef, inject, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NytranslateService } from '../../core/services/nytranslate.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
private readonly _NytranslateService=inject(NytranslateService);
 readonly _TranslateService=inject(TranslateService);
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
  readonly _Renderer2=inject(Renderer2);
  @ViewChild ('navbarSupportedContent') navbarSupportedContent!:ElementRef
ngOnInit(): void {
if (isPlatformBrowser(this._PLATFORM_ID)) {
      if(localStorage.getItem('lang')!=null){
        this._NytranslateService.useChoiceLang();
            } 
  }}
lang(language:string){
    this._NytranslateService.changeLang(language);
}
closeIteamModal(){
  if (this.navbarSupportedContent.nativeElement.classList.contains("show")) {
    this._Renderer2.removeClass(this.navbarSupportedContent.nativeElement,'show')  
}}
}
