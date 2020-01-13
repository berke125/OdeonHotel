import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private login: number = 0;
  formData: Customer;
  customerList: Customer[];

  public rootURL = 'http://localhost:49725/api';
  public USER: any = {};
  constructor(private _http: HttpClient, private router: Router) { }

  Login(email, password) {

    return this._http.get(this.rootURL + '/Customer?email=' + email + '&password=' + password);
  }
  LoggedIn() {
    return !!localStorage.getItem('User')
  }
  Logout() {
    localStorage.removeItem('User')
    this.router.navigateByUrl('/Home')
  }
  PostCustomer(formData: Customer) {

    return this._http.post(this.rootURL + '/Customer', formData);

  }
  PutCustomer(formData: Customer) {
    return this._http.put(this.rootURL + '/Customer/' + formData.Id, formData);
  }
  DeleteCustomer(id: number) {
    return this._http.delete(this.rootURL + '/Customer/' + id);
  }
  GetCustomer() {
    return this._http.get(this.rootURL + '/Customer');
  }
  GetCustomerById(id: number) {
    this._http.get(this.rootURL + '/Customer/' + id).subscribe(data => {
      this.formData = data as Customer;
    })
  }
  GetCustomerByEMail(email: string) {
    return this._http.get(this.rootURL + '/Customer?email=' + email);

  }
  refresh() {
    this._http.get(this.rootURL + '/Customer').toPromise().then(res => this.customerList = res as Customer[]);
  }

}
