import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierComponent } from './supplier.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SupplierComponent],
  imports: [CommonModule, FormsModule],
  providers: [],
  bootstrap: [SupplierComponent],
})
export class SupplierModule {}
