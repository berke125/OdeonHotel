import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../shared/customer.service';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../shared/customer.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'Sign_Up-root',
  templateUrl: './Sign_Up.component.html'
})
export class Sign_UpComponent implements OnInit {
  custId: number;
  constructor(private service: CustomerService, private toastr: ToastrService, private route: ActivatedRoute, http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.resetForm();
    this.custId = this.route.snapshot.params.customerId;
    this.service.GetCustomerById(this.custId);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData =
      {
        Id: null,
        NameSurname: '',
        EMail: '',
        Password: ''
      }
  }
  onSubmit(form: NgForm) {
    if (this.custId == null || this.custId == 0) {
      this.service.PostCustomer(form.value).subscribe((data: any) => {
        if (data.Id > 0) {
          this.resetForm(form);
          this.service.GetCustomer();
          this.toastr.success('Inserted successfully.');
        }
        else {
          this.toastr.warning('Bu kayıt zaten var.');
        }

      })
    }
    else {
      this.service.PutCustomer(this.service.formData).subscribe(data => {
        this.resetForm(form);
        this.service.GetCustomer();
        this.toastr.warning('Update successfully.');
        this.router.navigate(['/CustomerList']);
      })
    }

  }

}
