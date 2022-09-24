import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';

const customerRoutes: Routes = [
  { path: 'add', component: CustomerComponent },
  { path: '', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
