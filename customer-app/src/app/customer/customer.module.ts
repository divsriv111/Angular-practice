import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from '../routing/customer-routing.module';

@NgModule({
  declarations: [CustomerComponent],
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
