import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../environment/environmet';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  private readonly _HttpClient=inject(HttpClient);
  private readonly _Router=inject(Router);

  addNode(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}notes`,data,
    // {headers:{token:'3b8ny__'+localStorage.getItem('NodeToken')}}
    )} 
  
  getUserNode():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}notes`,
      // {headers:{token:'3b8ny__'+localStorage.getItem('NodeToken')}}
    )}
   
  deleteNode(nodeId:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}notes/${nodeId}`,
      // {headers:{token:'3b8ny__'+localStorage.getItem('NodeToken')}}
    )}
  updateNote(nodeId:string,data:object):Observable<any>{
      return this._HttpClient.put(`${environment.baseUrl}notes/${nodeId}`,data,
      // {headers:{token:'3b8ny__'+localStorage.getItem('NodeToken')}}
    )}
   
}
