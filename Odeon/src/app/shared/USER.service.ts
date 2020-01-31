import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { USER } from './USER.model';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  private login: number = 0;
  public rootURL = 'http://localhost:49725/api';
  public USER: any = {};
  constructor(private _http: HttpClient, private router: Router) { }
  GetLogin(code, password) {

    return this._http.get(this.rootURL + '/USERS?code=' + code + '&password=' + password);
  }
  LoggedIn() {
    return !!localStorage.getItem('User')
  }
  Logout() {
    localStorage.removeItem('User')
    this.router.navigateByUrl('/Home')
  }
  GetRoom()
  {
    //return this._http.get<any>(this.rootURL + '/USERS?oda_no=' + oda_no);
    return this._http.get(this.rootURL + '/RoomView');
  }
  GetRooms(val: string)
  {
    return this._http.get(this.rootURL + '/RoomView?roomsfilter='+val);
  }
  GetDate()
  {
    return this._http.get(this.rootURL);
  }
}
