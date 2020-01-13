import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../shared/customer.service';
import { Location } from '@angular/common';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'Sign_In-root',
  templateUrl: './Sign_In.component.html'
})
export class Sign_InComponent {
  public email: string = '';
  public password: string = '';
  constructor(private service: CustomerService, private router: Router) { }
  isLoggedin = false;
  login() {
    var login = this.service.Login(this.email, this.password).subscribe((customer: any) => {
      if (customer.Id > 0) {

        this.isLoggedin = true;
        alert('Başarıyla giriş yaptınız.' + customer.NameSurname);
        localStorage.setItem('User', JSON.stringify(customer));
        this.service.USER = customer;
        location.reload();
        this.router.navigateByUrl('/Welcome');
      }
      else {
        this.isLoggedin = false;
        alert('Giriş başarısız.');
      }


    })




  }

}
