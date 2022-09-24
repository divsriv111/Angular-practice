import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierComponent } from './supplier.component';
import { FormsModule } from '@angular/forms';
import { SupplierRoutingModule } from '../routing/supplier-routing.module';

@NgModule({
  declarations: [SupplierComponent],
  imports: [CommonModule, FormsModule, SupplierRoutingModule],
  providers: [],
  bootstrap: [SupplierComponent],
})
export class SupplierModule {}
