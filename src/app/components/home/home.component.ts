import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
private readonly _PLATFORM_ID=inject(PLATFORM_ID)
ngOnInit(): void {
            var typed = new Typed('#pen', {
              loop: true,
              typeSpeed:100,
              shuffle: true,
              backDelay: 1000,
              smartBackspace: false,
              strings: [
                'Pen <i class="fa-brands fa-d-and-d"></i> Pepar',
                'ورقة <i class="fa-brands fa-d-and-d"></i> قلم ',
              ],
            });
}
}
