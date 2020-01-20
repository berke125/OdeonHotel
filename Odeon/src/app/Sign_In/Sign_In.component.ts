import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../shared/customer.service';
import { Location } from '@angular/common';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../shared/USER.service';
@Component({
  selector: 'Sign_In-root',
  templateUrl: './Sign_In.component.html'
})
export class Sign_InComponent {
  public code: string = '';
  public password: string = '';
  constructor(private service: UserService, private router: Router) { }
  isLoggedin = false;
  login() {
    var login = this.service.GetLogin(this.code, this.password).subscribe((user: any) => {
      if (user.Code != null) {

        this.isLoggedin = true;
        alert('Başarıyla giriş yaptınız.' + user.FirstName +' '+user.LastName);
        localStorage.setItem('User', JSON.stringify(user));
        this.service.USER = user;
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
