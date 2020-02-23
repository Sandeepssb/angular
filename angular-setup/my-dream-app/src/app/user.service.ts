import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserInterface} from './userInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private _baseUrl:string = "https://jsonplaceholder.typicode.com";
 

  constructor(private http:HttpClient) { }

  getUser():Observable<UserInterface[]>{
   return this.http.get<UserInterface[]>(this._baseUrl+'/posts');
  }

  userDetails(makeId:number):Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(this._baseUrl+`/posts/${makeId}`);
   }

}
