import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { headerInterceptor } from './core/interceptors/header.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  NgxSpinnerModule } from 'ngx-spinner';
import { loadingscreenInterceptor } from './core/interceptors/loadingscreen.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
// func used to load files of translate from file of translate you selected:
export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
  }
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withInMemoryScrolling({scrollPositionRestoration:'top'})),
    provideClientHydration(),provideHttpClient(withFetch(),withInterceptors([headerInterceptor,loadingscreenInterceptor])),provideAnimations(),
    importProvidersFrom(NgxSpinnerModule,
     //  بتاعة الترجمه ايلي فوق دي تشتغل functionعلشان ال
     TranslateModule.forRoot({
     defaultLanguage:'en',//عشان لو مفيش زرار لتغير اللغة
   // service (انا لسه مستخدمتهاش لو مضغطش علي الازرار (زياده امان احسن تتفعل
         loader:{
           provide:TranslateLoader ,//class
           useFactory:HttpLoaderFactory,//  folders  لل   loadingايلي بتعمل functionاسم ال
           deps:[HttpClient]
    }
    }))
   ]
 };
