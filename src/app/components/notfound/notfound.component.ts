import { isPlatformBrowser, Location } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NytranslateService } from '../../core/services/nytranslate.service';
@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent implements OnInit{
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
 private readonly  _Location=inject(Location);
 private readonly _NytranslateService=inject(NytranslateService);
 
ngOnInit(): void {
           //  translation
    if (isPlatformBrowser(this._PLATFORM_ID)) {
      if(localStorage.getItem('lang')!=null){
        this._NytranslateService.useChoiceLang();
            } 
  }
}
back(){
  this._Location.back();
}
}
