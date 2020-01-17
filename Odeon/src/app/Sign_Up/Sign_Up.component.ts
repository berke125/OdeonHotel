import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../shared/customer.service';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../shared/customer.model';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/USER.service';
@Component({
  selector: 'Sign_Up-root',
  templateUrl: './Sign_Up.component.html'
})
export class Sign_UpComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService, private route: ActivatedRoute, http: HttpClient, private router: Router) {

  }

  ngOnInit() {

  }



}


