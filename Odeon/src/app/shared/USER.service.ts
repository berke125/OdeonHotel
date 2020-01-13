import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService
{
  private login: number = 0;
  public rootURL = 'http://localhost:49725/api';
  public USER: any = {};
  constructor(private _http: HttpClient, private router: Router) { }

  DeleteUser(code: string)
  {
    return this._http.delete(this.rootURL + '/USERS/' + code);
  }
}
