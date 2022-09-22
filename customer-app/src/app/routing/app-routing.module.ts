import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { AppComponent } from '../home/app.component';
import { SupplierComponent } from '../supplier/supplier.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: '', component: AppComponent },
  { path: '*', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
