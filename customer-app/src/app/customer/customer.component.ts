import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customer: Customer = new Customer();
  listOfCustomer: Array<Customer> = new Array<Customer>();
  isAvailable: boolean = this.listOfCustomer.length != 0;
  constructor() {}

  ngOnInit(): void {}

  AddCustomer(event: any) {
    this.listOfCustomer.push(this.customer);
    this.customer = new Customer();
    this.isAvailable = this.listOfCustomer.length != 0;
    console.log(this.listOfCustomer);
  }
}
