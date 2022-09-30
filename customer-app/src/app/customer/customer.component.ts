import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/models/customer';
import { BaseLogger } from '../utility/Logger';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customerModel: Customer = new Customer();
  listOfCustomer: Array<Customer> = new Array<Customer>();
  isAvailable: boolean = this.listOfCustomer.length != 0;

  constructor(_logger: BaseLogger) {
    _logger.Log();
  }

  ngOnInit(): void {}

  AddCustomer(event: any) {
    this.listOfCustomer.push(this.customerModel);
    this.customerModel = new Customer();
    this.isAvailable = this.listOfCustomer.length != 0;
    console.log(this.listOfCustomer);
  }

  hasError(typeOfValidator: string, controlGroupName: string): boolean {
    return (
      this.customerModel.customerFormGroup.dirty &&
      this.customerModel.customerFormGroup.controls[controlGroupName].hasError(
        typeOfValidator
      )
    );
  }
}
