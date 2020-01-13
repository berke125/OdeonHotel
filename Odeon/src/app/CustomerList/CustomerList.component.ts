import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'CustomerList-root',
  templateUrl: './CustomerList.component.html'
})
export class CustomerListComponent implements OnInit {
  cusId: number;
  customers: any;
  constructor(private service: CustomerService, http: HttpClient, private toastr: ToastrService) {

  }
  refreshList() {
    let resp = this.service.GetCustomer();
    resp.subscribe((data) => this.customers = data);
  }
  ngOnInit() {
    this.refreshList();
  }
  deleteCustomer(id: number) {
    if (confirm('Are you sure want to delete this record ?') == true) {
      this.service.DeleteCustomer(id).subscribe(x => {
        this.refreshList();
        this.toastr.warning("Deleted Successfully");


      })
    }
  }


}
