import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
  bootstrap: [CustomerComponent],
})
export class CustomerModule {}
