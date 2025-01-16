import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../environment/environmet';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private readonly _HttpClient=inject(HttpClient);
private readonly _Router=inject(Router);

// 1.singup
singup(data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}users/signUp`,data)
 }
// 2.singin
singin(data:object):Observable<any>{
  return this._HttpClient.post(`${environment.baseUrl}users/signIn`,data)
}
// 3.logout function
logout():void{
localStorage.removeItem("NodeToken");
this._Router.navigate(['/home'])
}

}
