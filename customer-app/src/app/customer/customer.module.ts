import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from '../routing/customer-routing.module';
import { CustomerGridComponent } from './customer-grid/customer-grid.component';

@NgModule({
  declarations: [CustomerComponent, CustomerGridComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
  ],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
