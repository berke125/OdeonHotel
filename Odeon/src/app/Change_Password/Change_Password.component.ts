import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../shared/customer.service';
import { Customer } from '../shared/customer.model';
@Component({
  selector: 'Change_Password-root',
  templateUrl: './Change_Password.component.html'
})
export class ChangePasswordComponent
{
  public email: string = '';
  public password: string = '';
  constructor(private service: CustomerService) { }
  change()
  {
    
    this.service.GetCustomerByEMail(this.email).subscribe(
      (data: any) => {
        console.log(JSON.stringify(data.password));
        
      }
    );
  }
}
