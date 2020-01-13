import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomerService } from '../shared/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../shared/customer.model';
@Component({
  selector: 'Forgotten_Password-root',
  templateUrl: './Forgotten_Password.component.html'
})

export class ForgottenPasswordComponent implements OnInit {
  public Customer: any;
  public email: string = '';
  constructor(private router: Router, private toastr: ToastrService, private service: CustomerService) { }
  search() {
    this.service.GetCustomerByEMail(this.email).subscribe(
      (data: any) => {
        console.log(JSON.stringify(data));
        this.Customer = data;
        if (data != null) {
          alert('Bu kayıt var.');

        }
        else {
          this.toastr.error('Böyle bir kayıt yoktur, yeni kayıt açınız.');
        }
      }
    );
  }
  save() {
    this.service.PutCustomer(this.Customer).subscribe((data: any) => {
      alert('Şifreniz başarıyla değiştirilmiştir.');
      location.reload();
      this.router.navigateByUrl('/Sign_In');

    }

    );
  }
  ngOnInit() {

  }
}
