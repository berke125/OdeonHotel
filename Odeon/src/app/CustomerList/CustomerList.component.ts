import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/USER.service';
@Component({
  selector: 'CustomerList-root',
  templateUrl: './CustomerList.component.html'
})
export class CustomerListComponent implements OnInit {
  cusId: number;
  customers: any;
  constructor(private service: CustomerService, http: HttpClient, private toastr: ToastrService, private userService: UserService) {

  }
  refreshList() {
    let resp = this.service.GetCustomer();
    resp.subscribe((data) => this.customers = data);
  }
  ngOnInit() {
    this.refreshList();
  }
 


}
